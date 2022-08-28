import React from "react";
import { useEffect } from "react";
import './App.css';


const SignOut = (props) => {
    return props.auth.currentUser && (
        <button className="sign-out" onClick={() => props.auth.signOut()}>Sign Out</button>
    );
}

export default SignOut;