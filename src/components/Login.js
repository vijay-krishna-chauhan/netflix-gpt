import React, { useState } from "react";
import Header from "./Header";

const Login = () => {

    const [isSignInForm,setSignInForm]=useState(true);
    const toggleSignInForm=()=>{
        setSignInForm(!isSignInForm);
    };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/93da5c27-be66-427c-8b72-5cb39d275279/94eb5ad7-10d8-4cca-bf45-ac52e0a052c0/IN-en-20240226-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="background image"
        />
      </div>
      <div className="w-4/12 p-12 bg-black text-white absolute my-36 mx-auto right-0 left-0 rounded-xl bg-opacity-80">
        <form className="">
          <h1 className="font-bold text-3xl py-4">{isSignInForm?"Sign In":"Sign Up"}</h1>
          {!isSignInForm&& (<input
            className="bg-gray-700 rounded-lg p-2 my-4 w-full"
            type="text"
            placeholder="Full Name"
          />
          )}
          <input
            className="bg-gray-700 rounded-lg p-2 my-4 w-full"
            type="email"
            placeholder="Email"
          />
          <input
            className="bg-gray-700 rounded-lg p-2 my-4 w-full"
            type="password"
            placeholder="Password"
          />
          <button
            className="bg-red-700 rounded-lg p-4 my-6 w-full"
            
          >
           {isSignInForm?"Sign In":"Sign Up"}
          </button>
          <div className="flex justify-between">
            <div className="flex">
              <input type="checkbox" />
              <div>Remember me</div>
            </div>
            <div>Need help?</div>
          </div>
        </form>

        <div className="py-8 cursor-pointer font-semibold" onClick={toggleSignInForm}>{isSignInForm?"New to Netflix? Sign Up now.":"Already registered? Sign In now."}</div>
      </div>
    </div>
  );
};

export default Login;
