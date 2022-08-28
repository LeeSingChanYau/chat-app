import React from "react";
import './App.css';
import firebase from 'firebase/compat/app';

const SignIn = (props) => {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        props.auth.signInWithPopup(provider);
    }

    return (
        <>
            <button className="sign-in" onClick={signInWithGoogle}>Sign In with Google</button>
        </>
    )
}

export default SignIn;