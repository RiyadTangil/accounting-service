import React, { useContext, useEffect, useState } from "react";
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from "./firebase.config";
import infoEmojis from "../../../images/info-emoji.svg";
import { useHistory, useLocation } from "react-router";

import { UserContext } from "../../../App";
import "./login.css";
import { Toast } from "react-bootstrap";

const Login = (props) => {
  const { setUser } = props;
  const storeAuthToken = () => {
    firebase
      .auth()
      .currentUser.getIdToken(/* forceRefresh */ true)
      .then(function (idToken) {
        sessionStorage.setItem("token", idToken);
      })
      .catch(function (error) {});
  };
  if (firebase.apps.length === 0) {
    firebase.initializeApp(firebaseConfig);
  }

  const [loggedInUser, setLoggedInUser] = useContext(UserContext);
  const [loginInfo, setLoginInfo] = useState({});
  let [newUser, setNewUser] = useState(false);
  const [show, setShow] = useState(true);

  const handleBlur = (event) => {
    let newUser = { ...loginInfo };
    newUser[event.target.name] = event.target.value;
    setLoginInfo(newUser);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      newUser &&
      loginInfo.password &&
      loginInfo.password === loginInfo.confirmPassword
    ) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(loginInfo.email, loginInfo.password)
        .then((userCredential) => {
          var { displayName, email } = userCredential.user;
          let newUserInfo = { name: displayName, email: email };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          storeAuthToken();
          history.replace(from);
        })
        .catch((error) => {
          let newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }
    if (newUser && loginInfo.password !== loginInfo.confirmPassword) {
      let newUserInfo = { ...loggedInUser };
      newUserInfo.error = "pass word not matched";

      setLoggedInUser(newUserInfo);
    }
    if (!newUser && loginInfo.email && loginInfo.password) {
      firebase
        .auth()
        .signInWithEmailAndPassword(loginInfo.email, loginInfo.password)
        .then((userCredential) => {
          var { displayName, email } = userCredential.user;
          let newUserInfo = { name: displayName, email: email };
          newUserInfo.error = "";
          newUserInfo.success = true;
          setLoggedInUser(newUserInfo);
          storeAuthToken();
          history.replace(from);
        })
        .catch((error) => {
          let newUserInfo = { ...loggedInUser };
          newUserInfo.error = error.message;
          newUserInfo.success = false;
          setLoggedInUser(newUserInfo);
        });
    }
  };

  let history = useHistory();
  let location = useLocation();
  let { from } = location.state || { from: { pathname: "/" } };

  const handleGoogleSignIn = () => {
    const provider = new firebase.auth.GoogleAuthProvider();
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((result) => {
        const { displayName, email, photoURL } = result.user;

        const signedInUser = { name: displayName, email: email, img: photoURL };
        setLoggedInUser(signedInUser);

        storeAuthToken();
        history.replace(from);
      })
      .catch((error) => {
        let newUserInfo = { ...loggedInUser };
        newUserInfo.error = error.message;
        setLoggedInUser(newUserInfo);
      });
  };

  return (
    <div className="login-page container ">
      <div className="d-flex justify-content-center my-5  ">
        <div
          style={{ borderRadius: "20px" }}
          className=" login-container bg-light p-5"
        >
          <form onSubmit={handleSubmit}>
            {newUser && (
              <div class=" mb-1">
                <label for="inputemail3" class="col-sm-2 col-form-label">
                  Name
                </label>

                <input class="form-control" type="text" />
              </div>
            )}
            <>
              <Toast
                className="toast-right"
                onClose={() => setShow(false)}
                show={show}
                delay={5000}
              >
                <Toast.Header>
                  <img src={infoEmojis} className="rounded mr-2" alt="Info" />
                  <strong className="mr-auto">Important Info</strong>
                </Toast.Header>
                <Toast.Body className="text-center">
                  Use this email to see all admin features
                  <br />
                  <b>Email: testadmin@gmail.com</b>
                  <br />
                  <b>password : 111111</b>
                </Toast.Body>
              </Toast>
            </>

            <div class=" mb-1">
              <label for="inputemail3" class="col-sm-2 col-form-label">
                email
              </label>

              <input
                class="form-control"
                type="text"
                required
                onBlur={handleBlur}
                placeholder="type your email"
                name="email"
                id=""
              />
            </div>
            <div class="mb-1">
              <label for="inputPassword3" class="col-sm-2 col-form-label">
                Password
              </label>

              <input
                class="form-control"
                id="inputPassword3"
                type="password"
                required
                onBlur={handleBlur}
                name="password"
                placeholder="type your password"
              />
            </div>

            {newUser && (
              <div class=" mb-1">
                <label for="inputPassword3" class="col-sm-2 col-form-label">
                  Confirm password
                </label>

                <input
                  class="form-control"
                  id="inputPassword3"
                  type="password"
                  required
                  onBlur={handleBlur}
                  name="confirmPassword"
                  placeholder="confirm password"
                />
              </div>
            )}
            {newUser ? (
              <p style={{ cursor: "pointer" }}>
                Already have an account ?{" "}
                <span
                  onClick={() => setNewUser(!newUser)}
                  name="newUser"
                  id="newUser"
                  class="text-primary"
                >
                  Log in
                </span>
              </p>
            ) : (
              <p style={{ cursor: "pointer" }}>
                Are you new user?{" "}
                <span
                  onClick={() => setNewUser(!newUser)}
                  name="newUser"
                  id="newUser"
                  class="text-primary"
                >
                  create account
                </span>
              </p>
            )}
            <div className=" justify-content-center  d-flex mb-1">
              <button
                className="w-75 btn main-bg"
                type="submit"
                variant="primary"
                size="md"
                block
              >
                {newUser ? "sign up" : "Log in"}
              </button>
            </div>
          </form>
          <p className="text-warning">{loggedInUser.error}</p>
          <div className="justify-content-center d-flex">
            <button className="btn main-bg" onClick={handleGoogleSignIn}>
              sign in with google
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
