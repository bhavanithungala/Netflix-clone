import { useState, useRef } from "react";
import Header from "../components/Header";
import { loginFormValidation } from "../utils/loginFormValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../redux/userSlice";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);
  const [errorMessage, setErrorMessage] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const displayName = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleFormValidation = () => {
    const errMessage = loginFormValidation(
      email?.current?.value,
      password?.current?.value
    );
    setErrorMessage(errMessage);
    if (errMessage) return;

    if (!isSignedInForm) {
      createUserWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((newUser) => {
          const user = newUser?.user;
          updateProfile(user, {
            displayName: displayName?.current?.value,
          })
            .then(() => {
              const {
                uid: uid,
                email: email,
                displayName: displayName,
              } = auth?.currentUser;
              dispatch(
                addUser({ uid: uid, email: email, displayName: displayName })
              );
              navigate("/browse");
            })
            .catch((error) => {});
        })
        .catch((error) => {
          const errorCode = error?.errorCode;
          const errorMessage = error?.errMessage;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email?.current?.value,
        password?.current?.value
      )
        .then((loggedInUser) => {
          const user = loggedInUser?.user;
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error?.errorCode;
          const errorMessage = error?.errMessage;
          setErrorMessage(errorCode + "-" + errorMessage);
        });
    }
  };

  const toggleSignUpForm = () => {
    setIsSignedInForm(!isSignedInForm);
  };
  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/150c4b42-11f6-4576-a00f-c631308b1e43/web/IN-en-20241216-TRIFECTA-perspective_915a9055-68ad-4e81-b19a-442f1cd134dc_medium.jpg"
          alt="Logo"
        />
      </div>
      <div className="absolute bg-black bg-opacity-85 w-1/4 mx-auto p-16 text-white my-36 left-0 right-0 rounded">
        <h1 className="font-bold text-3xl mb-7">
          {isSignedInForm ? "Sign In" : "Sign Up"}
        </h1>
        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex flex-col space-y-4"
        >
          {!isSignedInForm && (
            <input
              ref={displayName}
              className="w-full p-3 border rounded bg-black"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            ref={email}
            className="w-full p-3 border rounded bg-black"
            type="text"
            placeholder="Email or mobile Number"
          />
          <input
            ref={password}
            className="w-full p-3 border rounded bg-black"
            type="password"
            placeholder="Password"
          />
          {errorMessage && (
            <p className="text-red-700 text-sm font-semibold">{errorMessage}</p>
          )}
          <button
            className=" w-full p-2 rounded bg-red-700"
            onClick={handleFormValidation}
          >
            {isSignedInForm ? "Sign In" : "Sign Up"}
          </button>
          {isSignedInForm && (
            <>
              <p className="text-gray-400  text-center">OR</p>
              <button className=" w-full p-2 rounded bg-slate-700">
                Use a sign-in code
              </button>
              <p className=" w-full text-center">Forgot Password?</p>
            </>
          )}
          <div>
            <input className="mr-2" type="checkbox" />
            <label>Remember me</label>
          </div>
          <div className="flex">
            <p className="text-gray-400 mr-2">
              {!isSignedInForm ? "Already Registered?" : "New to Netflix?"}
            </p>
            <p className="cursor-pointer" onClick={toggleSignUpForm}>
              {!isSignedInForm ? "Sign in now" : "Sign up now."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
