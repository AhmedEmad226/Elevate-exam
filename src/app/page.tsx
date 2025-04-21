import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";

export default async function Page() {

  // *** Server Component ***
  // saving the decoded token that Next.auth stored in the cookies 
  const authCookie = cookies().get('next-auth.session-token')?.value
  
  // then decoding it using the secret 'the decode secret' and
  // the decoded cookie, which returns the actual token
  const token = await decode({
    secret: process.env.NEXTAUTH_SECRET!,
    token: authCookie
  })
  console.log(token?.token)

  


  return (
    <>
      <h1 className="text-3xl bg-white text-slate-800 text-center w-fit hover:text-white hover:bg-slate-800 duration-300 p-3 mx-auto my-10 rounded-md">
        Welcome home
      </h1>

    </>
  );
}
