

import React, { useContext, useEffect, useState } from 'react';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebase.config';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faGoogle } from '@fortawesome/free-brands-svg-icons';
import { UserContext } from '../../../App';
import { useHistory, useLocation } from 'react-router';
import { useForm } from "react-hook-form";


const Login = () => {

    if (firebase.apps.length === 0) {
        firebase.initializeApp(firebaseConfig);
    }
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    const [isPasswordMatch, setIsPasswordMatch] = useState(null);
    const [loginInfo, setLoginInfo] = useState([])



    let history = useHistory();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };


    const handleGoogleSignIn = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        firebase.auth()
            .signInWithPopup(provider)
            .then((result) => {
    
                const { displayName, email, photoURL } = result.user;
 
                const signedInUser = { name: displayName, email: email, img: photoURL }
                setLoggedInUser(signedInUser)
          
                storeAuthToken()
                history.replace(from);


            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const email = error.email;
                const credential = error.credential;

            });

        const storeAuthToken = () => {
            firebase.auth().currentUser.getIdToken(/* forceRefresh */ true).then(function (idToken) {
                sessionStorage.setItem('token', idToken)

            }).catch(function (error) {

            });
        }

    }

    let [newUser, setNewUser] = useState(false)
    const hasNumber = input => /\d/.test(input);

    const handleBlur = (event) => {
        let isFormValid = true;
        if (event.target.name === 'Email') {
            isFormValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(event.target.value)

        }
        if (event.target.name === 'password') {

            let password = event.target.value

            setIsPasswordMatch(password);
            isFormValid = event.target.value.length >= 8 && hasNumber(event.target.value);
        }
        if (event.target.name === "confirmPassword") {
            isFormValid = isPasswordMatch === event.target.value;
        }
        if (isFormValid) {
            let newUser = { ...loginInfo }
            console.log("new user", newUser);
            newUser[event.target.name] = event.target.value
            setLoginInfo(newUser)
            console.log('newuser', newUser);
        }
    }





    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(loginInfo.Email, loginInfo.password);
        if (newUser && loginInfo.Email && loginInfo.password && loginInfo.confirmPassword) {
            firebase.auth().createUserWithEmailAndPassword(loginInfo.Email, loginInfo.password)
                .then((res) => {
                    let newUserInfo = { ...loginInfo }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    history.replace(from);
                    updateUserName(loggedInUser.name)
                    console.log('sign in user', res.user, newUserInfo);
                })
                .catch((error) => {
                    let newUserInfo = { ...loginInfo }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
        if (!newUser && loginInfo.Email && loginInfo.password) {
            firebase.auth().signInWithEmailAndPassword(loginInfo.Email, loginInfo.password)
                .then((userCredential) => {
                    let newUserInfo = { ...loginInfo }
                    newUserInfo.error = ''
                    newUserInfo.success = true
                    setLoggedInUser(newUserInfo)
                    history.replace(from);

                })
                .catch((error) => {
                    let newUserInfo = { ...loginInfo }
                    newUserInfo.error = error.message;
                    newUserInfo.success = false
                    setLoggedInUser(newUserInfo)
                });
        }
    }
    const updateUserName = (name) => {
        var user = firebase.auth().currentUser;

        user.updateProfile({
            displayName: name
        }).then(function () {
            // Update successful.
        }).catch(function (error) {
            console.log(error);
        });
    }


    const handleNewSubmit = () => {
        console.log("clicked");
    }


    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="container">
                        <div >

                            <form className="from-info" onSubmit={handleSubmit} action="">

                                {newUser && <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Your name</label>
                                    <input type="text" class="form-control" required onBlur={handleBlur} placeholder="type your name" name="name" id="" />


                                </div>}
                                <div class="mb-3">
                                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                                    <input type="text" class="form-control" required onBlur={handleBlur} placeholder="type your Email" name="Email" id="" />
                                    <div id="emailHelp" class="form-text">We'll never share your email with anyone else.</div>
                                </div>

                                <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Password</label>
                                    <input type="password" class="form-control" required onBlur={handleBlur} name="password" id="" placeholder="type your password" />
                                </div>

                                {newUser && <div class="mb-3">
                                    <label for="exampleInputPassword1" class="form-label">Confirm Password</label>
                                    <input type="password" class="form-control" required onBlur={handleBlur} name="confirmPassword" id="" placeholder="confirm password" />
                                </div>}


                                <div className="row">
                                    <button type="submit" class="btn btn-primary">{newUser ? "sign in" : "sign up"}</button>
                                    {
                                        newUser ? <p className="pt-2">Already have a account ? <span style={{ cursor: "pointer", color: "green" }} onClick={() => setNewUser(!newUser)}>sign up</span> </p> :
                                            <p className="pt-2">Not a member ? <span style={{ cursor: "pointer", color: "green" }} onClick={() => setNewUser(!newUser)}>create a account</span> </p>
                                    }

                                </div>

                            </form>

                            <p style={{ color: 'red' }}>{loggedInUser.error}</p>
                            {
                                loggedInUser.success && <p style={{ color: 'green' }}>Successfully {newUser ? 'sign up' : 'logged In'}</p>
                            }
                        </div>

                        <div onClick={handleGoogleSignIn} class="input-group d-flex justify-content-center mt-2">
                            <div class="input-group-text"><FontAwesomeIcon className="text-success" icon={faGoogle} /></div>
                            <div className="className btn btn-primary"> sign in google</div>
                        </div>

                    </div>
                </div>
                <div className="col-md-6">
                    <img src="" alt="" />
                </div>
            </div>
        </div>

    );
};

export default Login;