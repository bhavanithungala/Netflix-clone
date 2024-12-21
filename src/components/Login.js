import { useState } from "react";
import Header from "../components/Header";

const Login = () => {
  const [isSignedInForm, setIsSignedInForm] = useState(true);

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
        <form className="flex flex-col space-y-4">
          {!isSignedInForm && (
            <input
              className="w-full p-3 border rounded bg-black"
              type="text"
              placeholder="Full Name"
            />
          )}
          <input
            className="w-full p-3 border rounded bg-black"
            type="text"
            placeholder="Email or mobile Number"
          />
          <input
            className="w-full p-3 border rounded bg-black"
            type="password"
            placeholder="Password"
          />
          <button className=" w-full p-2 rounded bg-red-700">
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
              {isSignedInForm ? "Already Registered?" : "New to Netflix?"}
            </p>
            <p className="cursor-pointer" onClick={toggleSignUpForm}>
              {isSignedInForm ? "Sign in now" : "Sign up now."}
            </p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
