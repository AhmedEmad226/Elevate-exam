import LoginForm from "./_components/form";

export default function Page() {

  return (
    <>
      <main className="sm:w-full lg:w-[410px] flex h-[206px]  flex-col justify-evenly m-auto p-5">
        <h2 className="font-bold text-3xl">Sign in</h2>

      {/* Form */}
      <LoginForm/>
      </main>
    </>
  );
}
