import React from "react";
import { imageDetails } from "../../resources";

export default function SignInIllustration() {
  return (
    <div className="hidden md:block md:flex-1">
      <div className="relative ml-auto h-[500px] w-[500px]">
        <img
          src={imageDetails.Signup.src}
          alt={imageDetails.Signup.alt}
          className="object-contain w-full h-full"
        />
      </div>
    </div>
  );
}
