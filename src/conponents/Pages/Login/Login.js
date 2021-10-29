import React from "react";
import useAuth from "../../../hooks/useAuth";

const Login = () => {
  const { signInWithGoogle } = useAuth();
  const loginHandler = () => {
    signInWithGoogle().then((result) => {
      console.log(result.user);
    });
  };
  return (
    <div className="container mx-auto">
      <div className="lg:w-1/3 mt-16 mx-auto">
        <button
          onClick={loginHandler}
          type="submit"
          className="
                    w-full
                    items-center
                    block
                   
                    py-3.5
                    text-base
                    font-medium
                    text-center text-blue-400
                    transition
                    duration-500
                    ease-in-out
                    transform
                    border-2 border-white
                    shadow-md
                    rounded-xl
               
                  "
        >
          <div className="flex items-center justify-center">
            <img
              src="https://www.pngkey.com/png/full/11-116295_google-garage-transparent-background-google-logo.png"
              alt="google"
              width="50"
            />
            <span className="ml-4"> Log in with Google</span>
          </div>
        </button>
      </div>
    </div>
  );
};

export default Login;
