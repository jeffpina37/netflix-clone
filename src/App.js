 import React, { useEffect } from 'react';
import './App.css';
import HomeScreen from './components/HomeScreen';
import {BrowserRouter as Router,Switch, Route} from 'react-router-dom';
import LoginScreen from './components/LoginScreen';
import { auth } from './firebase';
import { useDispatch, useSelector, } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './components/ProfileScreen';

function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  useEffect(() => {
    const unsubscribe =  auth.onAuthStateChanged((userAuth) => {
      if (userAuth) {
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email,
          photoURL: userAuth.photoURL,
          displayName: userAuth.displayName,
        })
        );
      } else {
        dispatch(logout())
      }
    })
    return unsubscribe;
  }, [dispatch]);

  return (
    <div className="app">
      <Router>
        {!user ? (
          <LoginScreen />
        ) : (
          <Switch>
          <Route exact path='/profile'>
            <ProfileScreen/>
          </Route>
          <Route exact path='/'>
            <HomeScreen/>
          </Route>
        </Switch>
        )}
      </Router>
    </div>
  );
}

export default App;
