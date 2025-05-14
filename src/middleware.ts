import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: "/((?!api|trpc|_next|_vercel|.*\\..*).*)",
};

const privatePages = new Set(["/dashboard", "/quiz-history"]);
const authPages = new Set(["/login", "/register", "/reset-password", "/verify-code"]);

export default async function Middleware(req: NextRequest) {
  // this way is Only available in ---Middleware--- and ---Route handlers---
  const token = await getToken({ req });

  // if user is trying to reach a private page
  if (privatePages.has(req.nextUrl.pathname)) {
    if (token) return NextResponse.next(); // have token? Continue to the desired page

    // Redirect to login page if no token
    const redirect = new URL("/login", req.nextUrl.origin);
    return NextResponse.redirect(redirect);
  } else {
    // Check if the user is navigating to an auth page with the token
    if (token && authPages.has(req.nextUrl.pathname)) {
      // Redirect to dashboard
      const redirect = new URL("/dashboard", req.nextUrl.origin);
      return NextResponse.redirect(redirect);
    }

    // Proceed if the user has no token and trying to access an auth page
    return NextResponse.next();
  }
}
