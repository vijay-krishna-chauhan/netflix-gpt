import React, { useRef, useState } from "react";
import Header from "./Header";
import user_icon from "../assets/user_icon.jpg";

import { checkValidData } from "../utils/validate";
import { auth } from "../utils/firebase";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { BG_URL, USER_AVATAR } from "../utils/constants";

const Login = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [isSignInForm, setSignInForm] = useState(true);

  const [errorMessage, setErrorMessage] = useState("");

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    // console.log(email.current.value);
    // console.log(password.current.value);
    setErrorMessage(message);

    if (message) return;
    if (!isSignInForm) {
      //sign up login
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: USER_AVATAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              //navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error.message);
            });
          //console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      //sign in logic
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          // console.log(user);
          // navigate("/browse");
          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };
  const toggleSignInForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src={BG_URL}
          className="h-screen w-full object-cover md:h-full"
          alt="background image"
        />
      </div>
      <div className="w-full md:w-4/12 p-12 bg-black text-white absolute my-36 mx-auto right-0 left-0 rounded-xl bg-opacity-80">
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <h1 className="font-bold text-3xl py-4">
            {isSignInForm ? "Sign In" : "Sign Up"}
          </h1>
          {!isSignInForm && (
            <input
              ref={name}
              className="bg-gray-700 rounded-lg p-2 my-4 w-full"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="bg-gray-700 rounded-lg p-2 my-4 w-full"
            type="email"
            ref={email}
            placeholder="Email"
          />
          <input
            className="bg-gray-700 rounded-lg p-2 my-4 w-full"
            type="password"
            ref={password}
            placeholder="Password"
          />

          <p className="text-red-500 font-bold text-lg py-2">{errorMessage}</p>

          <button
            className="bg-red-700 rounded-lg p-4 my-6 w-full"
            onClick={handleButtonClick}
          >
            {isSignInForm ? "Sign In" : "Sign Up"}
          </button>

          <div className="flex justify-between">
            <div className="flex">
              <input type="checkbox" />
              <div>Remember me</div>
            </div>
            <div>Need help?</div>
          </div>
        </form>

        <div
          className="py-8 cursor-pointer font-semibold"
          onClick={toggleSignInForm}
        >
          {isSignInForm
            ? "New to Netflix? Sign Up now."
            : "Already registered? Sign In now."}
        </div>
      </div>
    </div>
  );
};

export default Login;
