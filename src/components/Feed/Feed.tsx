import './Feed.scss';
import EditIcon from '@mui/icons-material/Edit';
import { InputOption } from './InputOption/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import { Post } from './Post/Post';
import { useEffect, useState } from 'react';
import { db } from '../../firebase';
import {
  DocumentData,
  addDoc,
  collection,
  onSnapshot,
  orderBy,
  query,
  serverTimestamp,
} from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { RootState } from '../../app/store';
import FlipMove from 'react-flip-move';

export const Feed = () => {
  const [posts, setPosts] = useState<DocumentData[]>([]);
  const [input, setInput] = useState('');
  const user = useSelector((user: RootState) => user.user.user);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const postsRef = collection(db, 'posts');
        const unsubscribe = onSnapshot(
          query(postsRef, orderBy('timestamp', 'desc')),
          (snapshot) => {
            const fetchedPosts = snapshot.docs.map((doc) => ({
              id: doc.id,
              data: doc.data(),
            }));

            setPosts(fetchedPosts);
          }
        );

        return () => unsubscribe(); // Return a cleanup function to unsubscribe from the snapshot listener when the component unmounts
      } catch (error) {
        console.error(error);
      }
    };

    fetchPosts();
  }, []);

  const sendPost = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setInput('');

    try {
      await addDoc(collection(db, 'posts'), {
        name: user?.displayName,
        description: user?.email,
        message: input,
        photoUrl: user?.profilePic || '',
        timestamp: serverTimestamp(),
      });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className='feed'>
      <div className='feed__inputContainer'>
        <div className='feed__input'>
          <EditIcon />

          <form onSubmit={sendPost}>
            <input
              value={input}
              onChange={(event) => setInput(event.target.value)}
              type='text'
            />

            <button type='submit'>Send</button>
          </form>
        </div>

        <div className='feed__inputOptions'>
          <InputOption title='photo' Icon={ImageIcon} color='#70B5F9' />
          <InputOption title='Event' Icon={ImageIcon} color='#70B5F9' />
          <InputOption title='Write article' Icon={ImageIcon} color='#70B5F9' />
        </div>
      </div>

      <FlipMove>
        {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
          <Post
            key={id}
            name={name}
            description={description}
            message={message}
            photoUrl={photoUrl}
          />
        ))}
      </FlipMove>
    </div>
  );
};
