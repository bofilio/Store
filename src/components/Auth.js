
import React, {useEffect, useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {authActionCreators} from '../state/authentication/action-creators/index';
import '../App.css';
import Todo from './Todo';
import { auth,google_provider,facebook_provider}from '../firebase/firebaseConfig'
function Auth() {
    //--------------------------------Redux 
    //-------------states
    const {token,currentUser,logged_in,loading}=useSelector(state=> state.auth);

    //--------------actions
    const dispatch = useDispatch();
    const { updateUser, updateToken, toggleLoggedIn, toggleLoading } = bindActionCreators(authActionCreators, dispatch);

    //--------------------------------------------------Refs
    const signin_emailRef = useRef();
    const signin_passwordRef = useRef();
    const signup_emailRef = useRef();
    const signup_passwordRef = useRef();
    const reset_emailRef = useRef();
    const change_password_confirmdRef = useRef();
    const change_passwordRef = useRef();
    //----------------------------------------------------helper functions
    const userIsLogged=()=>{
        return (logged_in || (window.localStorage.getItem("user_is_logged")==="yes"));
    }

   

    useEffect(() => {
        //this will be called each time user state change (its a listner to user state)
        //this will returne a function (let name it unsubscribe) we use it to destroy event listner when unmount
        const unsbscribe = auth.onAuthStateChanged(async user => {
            if (user) {
                //when sign in 
                updateUser(user)
                toggleLoggedIn(true)
                window.localStorage.setItem("user_is_logged", "yes");
                const token = await user.getIdToken();
                updateToken(token);
            } else {
                //when sign out
                updateUser(null);
                toggleLoggedIn(false)
                updateToken('');
                window.localStorage.setItem("user_is_logged", "no")

            }
            //enable signin buttons
            toggleLoading(false);
            return unsbscribe;

        })

    }, [])
    //---------------------------------------------------Google signin
    const googleSignin = async () => {
        toggleLoading(true);
        try {
            const userCredantial = await auth.signInWithPopup(google_provider);
            //do somthing with userCredantial.user
        } catch (err) {
            console.log(err);
        }
        toggleLoading(false);
    }
    //----------------------------------------------------Facebook signin
    const facebookSignin = async () => {
        toggleLoading(true);
        try {
            const userCredantial = await auth.signInWithPopup(facebook_provider);
            //do somthing with userCredantial.user
        } catch (err) {
            console.log(err);
        }
        toggleLoading(false);
    }
    //----------------------------------------------------BasicSignin
    const basicSignin = async (e) => {
        e.preventDefault();
        toggleLoading(true);
        try {
            const signin_email = signin_emailRef.current.value;
            const signin_password = signin_passwordRef.current.value;
            const userCredantial = await auth.signInWithEmailAndPassword(signin_email, signin_password);
            //do somthing with userCredantial.user
        } catch (err) {
            console.log(err);
        }
        toggleLoading(false);
    }
    //---------------------------------------------------Basic Sign up
    const basicSignup = async (e) => {
        e.preventDefault();
        toggleLoading(true);
        try {
            const signup_email = signup_emailRef.current.value;
            const signup_password = signup_passwordRef.current.value;
            const userCredantial = await auth.createUserWithEmailAndPassword(signup_email, signup_password);
            //do somthing with userCredantial.user
        } catch (err) {
            console.log(err);
        }
        toggleLoading(false);
    }
    //----------------------------------------------------send reset password
    const sendResetEmail = async (e) => {
        e.preventDefault();
        toggleLoading(true);
        try {
            const reset_email = reset_emailRef.current.value;
            console.log(reset_email + "$$$$$$$$$$$$$$$");
            await auth.sendPasswordResetEmail(reset_email);
        } catch (err) {
            console.log(err)
        }
        toggleLoading(false);

    }
    //-------------------------------------------change password
    const changeMyPassword = async (e) => {
        e.preventDefault();
        toggleLoading(true);
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
        toggleLoading(false);
    }
    //------------------------------------------signout
    const signOut = async () => {
        try {
            await auth.signOut();
        } catch (err) {
            console.log(err);
        }
    }

    return (
        
        <div className="App">
            <h2>Welcome {currentUser ? currentUser.uid : 'x'} </h2>
            

            {userIsLogged()?
                <>
                    <Todo token={token} />
                    <button onClick={signOut}>SignOff</button>
                    <h6>change password </h6>
                    <form onSubmit={changeMyPassword} style={{ marginBottom: '40px' }}>
                        <input type="password" ref={change_passwordRef} required />
                        <input type="password" ref={change_password_confirmdRef} required />
                        <button disabled={loading} type="submit" > change my password </button>
                    </form>
                </>
                :
                <div>
                    <h6>SignUP</h6>
                    <form onSubmit={basicSignup} style={{ marginBottom: '40px' }}>
                        <input type="email" ref={signup_emailRef} required />
                        <input type="password" ref={signup_passwordRef} required />
                        <button disabled={loading} type="submit" > signup </button>
                    </form>
                    <h6>Sign in </h6>
                    <form onSubmit={basicSignin} style={{ marginBottom: '40px' }}>
                        <input type="email" ref={signin_emailRef} required />
                        <input type="password" ref={signin_passwordRef} required />
                        <button disabled={loading} type="submit" > signin </button>
                    </form>
                    <h6>password reset </h6>
                    <form onSubmit={sendResetEmail} style={{ marginBottom: '40px' }}>
                        <input type="email" ref={reset_emailRef} required />
                        <button disabled={loading} type="submit" > send reset email </button>
                    </form>


                    <button disabled={loading} onClick={googleSignin}>Google</button>
                    <button disabled={loading} onClick={facebookSignin}>Facebook</button>
                </div>
            }

        </div>
    );
}

export default Auth;
