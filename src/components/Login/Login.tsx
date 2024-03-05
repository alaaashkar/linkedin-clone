import './Login.scss'
import linkedInIcon from '../../assets/images/LinkedIn_Logo.svg.webp'
import { EventHandler, useState } from 'react';
import { auth } from '../../firebase';
import { getAuth, createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword } from 'firebase/auth';
import { useDispatch } from 'react-redux';
import { login } from '../../features/userSlice';

export const Login = () => {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [profilePic, setProfilePic] = useState('')
  const auth = getAuth()
  const dispatch = useDispatch()


  const register = () => {
    if (!name) {
      return alert('Please enter a full name!')
    }

    const auth = getAuth()




    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (user) {
          updateProfile(user, {
            displayName: name,
            photoURL: profilePic
          }).then(() => {
            dispatch(login({
              email: auth.currentUser?.email,
              uid: auth.currentUser?.uid,
              displayName: name,
              photoUrl: profilePic
            }))
          }).catch((error) => {
            alert(error);
          });
        } else {
          // User is null, handle this case if needed
          console.error('User is null');
        }
      }).catch((error) => {
        // Handle createUserWithEmailAndPassword error
        console.error('Error creating user:', error.message);
      });
  };


  const loginToApp = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user
        dispatch(login(user))
        console.log(userCredential.user);
      })
      .catch((error: string) => {
        alert(error)
      })

  }



  return (
    <div className='login'>
      <img src={linkedInIcon} />

      <form onSubmit={loginToApp}>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          type="text"
          placeholder='Full name (required if registering)' />

        <input
          type="text"
          placeholder='Profile pic URL (required if registering)'
          value={profilePic}
          onChange={(e) => setProfilePic(e.target.value)}
        />

        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)
          } type="email"
          placeholder='Email' />

        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder='Password' />

        <button onClick={() => loginToApp} type='submit'>Sign In</button>
      </form>

      <p>Not a member? {" "}
        <span onClick={register} className='login_register'>Register Now</span>
      </p>
    </div >
  )
};
