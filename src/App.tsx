import { useDispatch, useSelector } from 'react-redux';
import './App.scss';
import { Feed } from './components/Feed/Feed';
import { Header } from './components/Header/Header';
import { Sidebar } from './components/Sidebar/Sidebar';
import { RootState } from './app/store';
import { Login } from './components/Login/Login';
import { useEffect, useState } from 'react';
import { auth } from './firebase';
import { login, logout } from './features/userSlice';
import { onAuthStateChanged } from 'firebase/auth';
import Widgets from './components/Widgets/Widgets';

function App() {
  const user = useSelector((state: RootState) => state.user.user);
  const dispatch = useDispatch();
  const [authLoading, setAuthLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        dispatch(login({
          email: user.email,
          uid: user.uid,
          displayName: user.displayName,
          photoUrl: user.photoURL
        }));
        setAuthLoading(false);
      } else {
        dispatch(logout());
        setAuthLoading(false);
      }
    });

    return () => {
      unsubscribe();
    };
  }, []);

  if (authLoading) {
    return <p>loading...</p>;
  }

  return (
    <div className="App">
      <Header />
      {!user ? (
        <Login />
      ) : (
        <div className='App__body'>
          <Sidebar />
          <Feed />
          <Widgets />
        </div>
      )}
    </div>
  );
}

export default App;
