import React from "react";
import RegisterForm from "./_components/form";

export default function Page() {

  return (
    <>
      <div className="sm:w-full lg:w-[410px] flex mt-[153px] flex-col justify-evenly m-auto p-5">
        <h2 className="font-bold text-3xl">Sign up</h2>

        {/* Form*/}
        <RegisterForm/>
      </div>
    </>
  );
}
