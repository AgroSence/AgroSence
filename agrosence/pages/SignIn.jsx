import React from "react";
import SignInForm from "../components/signin/SignInForm";
import SignInIllustration from "../components/signin/SignInIllustration";

export default function SignIn() {
  return (
    <div className="min-h-screen w-full bg-green-500 p-4 flex-auto flex-col justify-center">
      <SignInForm />
      <SignInIllustration />
    </div>
  );
}