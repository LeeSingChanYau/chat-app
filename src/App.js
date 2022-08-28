import React, {useRef, useState} from 'react';
import './App.css';
import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';
import 'firebase/compat/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

import ChatRoom from './ChatRoom.jsx';
import SignIn from './SignIn.jsx';
import SignOut from './SignOut.jsx';


firebase.initializeApp({
  apiKey: "AIzaSyDvr0gx4j5wCXeX44V5gNch3ZGU0MXuQB4",
  authDomain: "chat-app-5286b.firebaseapp.com",
  projectId: "chat-app-5286b",
  storageBucket: "chat-app-5286b.appspot.com",
  messagingSenderId: "337076827462",
  appId: "1:337076827462:web:fea7357c6bf1fa31d9a147",
  measurementId: "G-3KQQ516HCW"
})

const auth = firebase.auth();
const firestore = firebase.firestore();


function App() {

  const [user] = useAuthState(auth);

  return (
    <div className="App">
      <header>
        <h1>⚛️🔥💬</h1>
        <SignOut auth={auth} signOut={auth.signOut}/>
      </header>

      <section>
        {user ? <ChatRoom auth={auth} firestore={firestore}/> : <SignIn auth={auth}/>}
      </section>

    </div>
  );
}


export default App;