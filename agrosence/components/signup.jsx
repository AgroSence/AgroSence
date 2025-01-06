import { Link } from 'react-router-dom';
import images from '../resources.js';

export default function SignIn() {
  return (
    <div className="min-h-screen w-full bg-green-500 p-4">
      {/* Top right sign up button */}
      <Link
        to="/signup"
        className="absolute right-4 top-4 rounded-lg bg-white px-6 py-2 text-green-500 hover:bg-gray-100"
      >
        Sign up
      </Link>

      <div className="mx-auto flex min-h-[calc(100vh-2rem)] max-w-6xl items-center justify-between">
        {/* Left side - Sign in form */}
        <div className="w-full max-w-md rounded-3xl bg-white p-8 shadow-lg">
          <div className="space-y-6">
            <div className="space-y-2 text-center">
              <h1 className="text-3xl font-bold">Sign in</h1>
              <p className="text-gray-600">
                Hey, Enter your details to login to your account
              </p>
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
              Sign in
            </button>

            <p className="text-center text-sm text-gray-600">
              {"Don't have an account? "}
              <Link
                to="/signup"
                className="font-medium text-green-500 hover:underline"
              >
                Register Now
              </Link>
            </p>
          </div>
        </div>

        {/* Right side - Illustration */}
        <div className="hidden md:block md:flex-1">
          <div className="relative ml-auto h-[500px] w-[500px]">
            <img
              src={images[0].src}
              alt="Sign in illustration"
              className="object-contain"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
