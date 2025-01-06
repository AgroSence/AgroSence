import React from "react";
import { Link } from "react-router-dom";

export default function SignInForm() {
  return (
    <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg md:w-1/2 md:ml-0 md:mr-10">
      <div className="space-y-6">
        <div className="space-y-2 text-center">
          <h1 className="text-3xl font-bold">Sign in</h1>
          <p className="text-gray-600">Hey, Enter your details to login to your account</p>
        </div>

        <div className="space-y-4">
          <div>
            <input
              type="tel"
              placeholder="Enter Phone No."
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none"
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="w-full rounded-xl border border-gray-300 px-4 py-3 focus:border-green-500 focus:outline-none"
            />
          </div>
        </div>

        <button className="w-full rounded-xl bg-green-500 py-3 text-white transition-colors hover:bg-green-600">
          Sign up
        </button>

        <p className="text-center text-sm text-gray-600">
          {"Don't have an account? "}
          <Link to="/Signup" className="font-medium text-green-500 hover:underline">
            Register Now
          </Link>
        </p>
      </div>
    </div>
  );
}
