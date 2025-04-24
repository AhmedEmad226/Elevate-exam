import VerifyCodeForm from "./_components/form";

export default function Page() {
  return (
    <>
      <main className="sm:w-full lg:w-[410px] flex h-[206px]  flex-col justify-evenly m-auto">
        <h2 className="font-bold text-3xl">Verify code</h2>
        <VerifyCodeForm />
      </main>
    </>
  );
}
