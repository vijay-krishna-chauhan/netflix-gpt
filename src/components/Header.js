import React, { useEffect } from "react";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
//import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { LOGO } from "../utils/constants";
import {user_icon} from "../../src/assets/user_icon.jpg"
import { toggleGptSearchView } from "../utils/gptSlice";
const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch=useSelector(store=>store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        //navigate("/");
      })
      .catch((error) => {
        navigate("/error");
      });
  };

  useEffect(() => {
    const unsubscribe= onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    return ()=> unsubscribe();
  }, []);

  const handleGptSearch=()=>{
    dispatch(toggleGptSearchView());
  }
  return (
    <div className="absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10 flex flex-col md:flex-row justify-between">
      <img
        className="w-44 mx-auto md:mx-0"
        src={LOGO}
        alt="logo"
      />
      {user && (
        <div className="flex p-2 justify-between">
          <button className="bg-purple-800 text-white px-4 py-2 mx-4 my-2 rounded-lg"
          onClick={handleGptSearch}
          >{showGptSearch? "Home Page" : "GPT Search"}</button>
          <img
            className="hidden md:block w-12 h-12 rounded-lg"
            alt="usericon"
            src={user?.photoURL}
          
          />
          <button onClick={handleSignOut} className="font-bold text-white ml-2 bg-red-600 rounded-lg px-4 py-2 mx-4 my-2">
            Sign out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
