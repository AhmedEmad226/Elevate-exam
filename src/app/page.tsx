import { decode } from "next-auth/jwt";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export default async function Page() {
  // *** Server Component ***
  // Retreiving the decoded token that Next.auth stored in the cookies
  const authCookie = cookies().get("next-auth.session-token")?.value;

  // then decoding it using the secret 'the decode secret' and
  // the decoded cookie, which returns the actual token
  const token = await decode({
    // Decode will throw an error if it failed!
    secret: process.env.NEXTAUTH_SECRET!,
    token: authCookie,
  });

  if (token) redirect("/dashboard");
  else redirect("/login");
}
