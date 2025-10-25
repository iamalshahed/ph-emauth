import React, { useState } from "react";
import { NavLink } from "react-router";
import googleLogo from "./../../assets/google.webp";
import {
  createUserWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../../firebase/firebase.init";
import { CircleCheck, CircleX } from "lucide-react";

/**
 *
 * providers
 */
const googleProvider = new GoogleAuthProvider();

const SignUp = () => {
  /**
   * states
   */
  // const [user, setUser] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  /**
   * sign in with google
   */
  const handleSignInWithGoogle = () => {
    signInWithPopup(auth, googleProvider)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  /**
   * handleSubmit
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;

    // password pattern
    /*
      const lengthPattern = /^.{6,}$/;
      const casePattern = /^(?=.*[a-z]) (?=.* [A-Z]).+$/;
      const specialCharPattern = /^(?=.*[@#$%^&*(),.?":{}[<>]).+$/;

      if (!lengthPattern.test(password)) {
        toast.error("Password not matched!");
        setError("Password must be 6 character or longer");
        return;
      } else if (!casePattern.test(password)) {
        setError("Password must have at least one uppercase and one lowercase");
        return;
      } else if (!specialCharPattern.test(password)) {
        setError(
          "Password must contain atleast one special character (e. g. ! @ # $ % ^ & *)."
        );
        return;
      }
    */

    const passwordPattern =
      /^(?!^(.)\1{7,98}$)(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[^\r\n]{8,99}$/;
    if (!passwordPattern.test(password)) {
      setError(
        "Password must be 8–99 characters long, include at least one uppercase letter, one lowercase letter, and one number, and cannot be made of a single repeating character."
      );
      return;
    }

    // reset status: succes or error
    setError("");
    setSuccess(false);

    createUserWithEmailAndPassword(auth, email, password)
      .then((result) => {
        const newUser = result.user;
        console.log(newUser);
        setSuccess(true);
        e.target.reset();
      })
      .catch((err) => {
        setError(err.message);
      });
  };

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
            <button
              onClick={handleSignInWithGoogle}
              className="flex items-center justify-center gap-2 w-full border border-gray-300 rounded-full px-5 py-4 text-base text-zinc-600 hover:bg-gray-200"
            >
              <img width={22} src={googleLogo} alt="Google Logo" />
              <span>Continue with Google</span>
            </button>
          </div>

          <div className="mt-10 grid grid-cols-3 items-center text-gray-500">
            <hr className="border-gray-500" />
            <p className="text-center">OR</p>
            <hr className="border-gray-500" />
          </div>

          <form className="my-10" onSubmit={handleSubmit}>
            {/* if acoount created successfully */}
            {success && (
              <div className="">
                <p className="text-green-600 text-base bg-green-100 p-4 rounded-md mb-4 flex items-center justify-center gap-2">
                  <span>
                    <CircleCheck className="size-5" />
                  </span>
                  <p>Your account created successfully</p>
                </p>
              </div>
            )}

            {/* if user alrady exist */}
            {error && (
              <div className="">
                <p className="text-red-400 text-base bg-red-100 p-4 rounded-md mb-4 flex items-center justify-center gap-2">
                  <span>
                    <CircleX className="size-5" />
                  </span>
                  <p>{error}</p>
                </p>
              </div>
            )}

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
                    placeholder="Enter your email address"
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
                    placeholder="Enter your password"
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
                <NavLink className="font-semibold" to="/terms" target="_blank">
                  Terms of Use
                </NavLink>{" "}
                and{" "}
                <NavLink
                  className="font-semibold"
                  to="/privacy-policy"
                  target="_blank"
                >
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
