/* eslint-disable @next/next/no-img-element */
import SignupFormContainer from "@/components/auth/SignupFormContainer";
import React from "react";

function SignupPage() {
  return (
    <main className="w-full h-screen flex justify-center items-center p-5">
      <div className="w-full h-full rounded-xl overflow-hidden md:block hidden relative">
        <img
          src="/assets/image/authThumbnail2.jpg"
          alt="auth-thumbnail"
          className="w-full h-full object-cover"
        />
        <h1 className="absolute bottom-[50px] left-[50px] text-5xl text-white">
          @whisperClothing
        </h1>
      </div>
      <div className="w-full h-full flex justify-center items-center">
        <div className="max-w-[600px] w-full z-10">
          <SignupFormContainer />
        </div>
      </div>
    </main>
  );
}

export default SignupPage;
