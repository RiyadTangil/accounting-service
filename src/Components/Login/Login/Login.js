

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


    return (
        <div className="login-page container">
            <div className="row align-items-center" style={{ height: "100vh" }}>
                <div className="col-md-6 shadow p-5">
                    <div className="container">


                        <div onClick={handleGoogleSignIn} class="input-group d-flex justify-content-center mt-2">
                            <div class="input-group-text"><FontAwesomeIcon className="text-success" icon={faGoogle} /></div>
                            <div className="className btn btn-primary"> sign in google</div>
                        </div>

                    </div>
                </div>

            </div>
        </div>

    );
};

export default Login;