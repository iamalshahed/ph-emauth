import React from "react";
import { NavLink } from "react-router";
import googleLogo from "./../../assets/google.webp";

const SignUp = () => {
  return (
    <div>
      <title>Sign Up</title>

      <div className="w-full flex items-center justify-center min-h-screen py-10 px-4">
        <div className="max-w-md w-full">
          <div className="">
            {/* logo */}
            <div className="">
              <NavLink to="/">
                <img
                  width={100}
                  className="mx-auto"
                  src="/logo.png"
                  alt="GAI Logo"
                />
              </NavLink>
            </div>

            <div className="mb-10">
              <h2 className="text-center mt-10 text-2xl text-zinc-500">
                Create an account
              </h2>
            </div>
          </div>

          <div className="">
            <button className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-full px-5 py-4 text-base text-zinc-600 hover:bg-gray-200">
              <img width={22} src={googleLogo} alt="Google Logo" />
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center">OR</p>
            <hr className="border-gray-500" />
          </div>

          <form className="my-10">
            <fieldset className="space-y-4">
              <div className="space-y-4">
                <div className="flex flex-col items-start space-y-2">
                  <label
                    htmlFor="email"
                    className="text-base text-gray-600 font-semibold"
                  >
                    Email
                  </label>
                  <input
                    className="border-2 border-gray-300 h-14 rounded-sm px-5 text-base text-zinc-600"
                    type="email"
                    name="email"
                    id="email"
                    required
                  />
                </div>

                <div className="flex flex-col items-start space-y-2">
                  <label
                    className="text-base text-gray-600 font-semibold"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <input
                    className="border-2 border-gray-300 h-14 rounded-sm px-5 text-base text-zinc-600"
                    type="password"
                    name="password"
                    id="password"
                    required
                  />
                </div>
              </div>

              <div className="">
                <button className="w-full bg-sky-700 hover:bg-sky-800 text-white px-4 py-5 rounded-md">
                  Continue
                </button>
              </div>
            </fieldset>
          </form>

          <div className="space-y-10 text-center leading-relaxed">
            <div className="">
              <p className="text-sm text-zinc-500 leading-loose">
                By clicking the “Continue” button, you are creating a GAI
                account and therefore you agree to GAI{" "}
                <NavLink className="font-semibold" to="/terms">
                  Terms of Use
                </NavLink>{" "}
                and{" "}
                <NavLink className="font-semibold" to="/privacy-policy">
                  Privacy Policy
                </NavLink>
                .
              </p>
            </div>

            <div className="">
              <p className="text-sm text-zinc-600 font-bold">
                Already have an account?{" "}
                <span className="text-sky-600">
                  <NavLink to="/login">Sign In</NavLink>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
