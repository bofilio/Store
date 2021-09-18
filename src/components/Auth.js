
import React, { useState, useEffect, useRef } from 'react';
import '../App.css';
import firebase from 'firebase/app';
import 'firebase/auth'
import Todo from './Todo';

function Auth() {
  //-------------------------Satates
  const [loogedin, setloogedin] = useState(false || window.localStorage.getItem("logged") === "yes");
  const [currentUser, setCurrentUser] = useState();
  const [token, setToken] = useState('');
  const [signing, setSigning] = useState(false);
  //--------------------------------------------------Refs
  const signin_emailRef = useRef();
  const signin_passwordRef = useRef();
  const signup_emailRef = useRef();
  const signup_passwordRef = useRef();
  const reset_emailRef = useRef();
  const change_password_confirmdRef = useRef();
  const change_passwordRef = useRef();
  //----------------------------------------------------------

  useEffect(() => {
    //this will be called each time user state change (its a listner to user state)
    //this will returne a function (let name it unsubscribe) we use it to destroy event listner when unmount
    const unsbscribe = firebase.auth().onAuthStateChanged(async user => {
      if (user) {
        //when sign in 
        setCurrentUser(user);
        setloogedin(true);
        window.localStorage.setItem("logged", "yes");
        const token = await user.getIdToken();
        setToken(token);
      } else {
        //when sign out
        setCurrentUser(null);
        setloogedin(false);
        setToken('');
        window.localStorage.setItem("logged", "no")

      }
      //enable signin buttons
      setSigning(false);
      return unsbscribe;

    })

  }, [])
  //---------------------------------------------------Google signin
  const googleSignin = async () => {
    setSigning(!signing);
    try {
      const google_provider = new firebase.auth.GoogleAuthProvider();
      const userCredantial = await firebase.auth().signInWithPopup(google_provider);
      //do somthing with userCredantial.user
    } catch (err) {
      console.log(err);
    }
    setSigning(false);
  }
  //----------------------------------------------------Facebook signin
  const facebookSignin = async () => {
    setSigning(!signing);
    try {
      const facebook_provider = new firebase.auth.FacebookAuthProvider();
      const userCredantial = await firebase.auth().signInWithPopup(facebook_provider);
      //do somthing with userCredantial.user
    } catch (err) {
      console.log(err);
    }
    setSigning(false);
  }
  //----------------------------------------------------BasicSignin
  const basicSignin = async (e) => {
    e.preventDefault();
    setSigning(!signing);
    try {
      const signin_email = signin_emailRef.current.value;
      const signin_password = signin_passwordRef.current.value;
      const userCredantial = await firebase.auth().signInWithEmailAndPassword(signin_email, signin_password);
      //do somthing with userCredantial.user
    } catch (err) {
      console.log(err);
    }
    setSigning(false);
  }
  //---------------------------------------------------Basic Sign up
  const basicSignup = async (e) => {
    e.preventDefault();
    setSigning(!signing);
    try {
      const signup_email = signup_emailRef.current.value;
      const signup_password = signup_passwordRef.current.value;
      const userCredantial = await firebase.auth().createUserWithEmailAndPassword(signup_email, signup_password);
      //do somthing with userCredantial.user
    } catch (err) {
      console.log(err);
    }
    setSigning(false);

  }
  //----------------------------------------------------send reset password
  const sendResetEmail = async (e) => {
    e.preventDefault();
    setSigning(!signing);
    try {
      const reset_email = reset_emailRef.current.value;
      console.log(reset_email + "$$$$$$$$$$$$$$$");
      await firebase.auth().sendPasswordResetEmail(reset_email);
    } catch (err) {
      console.log(err)
    }
    setSigning(false);

  }
  //-------------------------------------------change password
  const changeMyPassword = async (e) => {
    e.preventDefault();
    const new_password = change_passwordRef.current.value;
    const new_password_confirm = change_password_confirmdRef.current.value;
    if (new_password === new_password_confirm) {
      try {
        await currentUser.updatePassword(new_password);
        console.log("password changed")
        signOut();
        //show success message
      } catch (err) {
        console.log(err);
      }
    } else {
      console.log('password dont match');
    }


  }
  //------------------------------------------signout
  const signOut = async () => {
    try {
      await firebase.auth().signOut();
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="App">
      <h2>Welcome {currentUser ? currentUser.uid : 'x'} </h2>

      {loogedin ? <>
        <Todo token={token} />
        <button onClick={signOut}>SignOff</button>
        <h6>change password </h6>
        <form onSubmit={changeMyPassword} style={{ marginBottom: '40px' }}>
          <input type="password" ref={change_passwordRef} required />
          <input type="password" ref={change_password_confirmdRef} required />
          <button disabled={signing} type="submit" > change my password </button>
        </form>
      </>
        :
        <div>
          <h6>SignUP</h6>
          <form onSubmit={basicSignup} style={{ marginBottom: '40px' }}>
            <input type="email" ref={signup_emailRef} required />
            <input type="password" ref={signup_passwordRef} required />
            <button disabled={signing} type="submit" > signup </button>
          </form>
          <h6>Sign in </h6>
          <form onSubmit={basicSignin} style={{ marginBottom: '40px' }}>
            <input type="email" ref={signin_emailRef} required />
            <input type="password" ref={signin_passwordRef} required />
            <button disabled={signing} type="submit" > signin </button>
          </form>
          <h6>password reset </h6>
          <form onSubmit={sendResetEmail} style={{ marginBottom: '40px' }}>
            <input type="email" ref={reset_emailRef} required />
            <button disabled={signing} type="submit" > send reset email </button>
          </form>


          <button disabled={signing} onClick={googleSignin}>Google</button>
          <button disabled={signing} onClick={facebookSignin}>Facebook</button>
        </div>
      }

    </div>
  );
}

export default Auth;
