import ResetPasswordForm from "./_components/form";

export default function Page() {
  return (
    <>
      <div className="sm:w-full lg:w-[410px] flex h-[206px]  flex-col justify-evenly m-auto">
        <h2 className="font-bold text-3xl">Set a password</h2>

        {/* Form */}
        <ResetPasswordForm/>
      </div>
    </>
  );
}
