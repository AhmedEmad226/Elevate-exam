import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|favicon.ico|sitemap.xml|robots.txt).*)",
  ],
};

const privatePages = new Set(["/dashboard", "/quiz-history"]);
const authPages = new Set([
  "/login",
  "/register",
  "/reset-password",
  "/verify-code",
]);

export default async function Middleware(req: NextRequest) {
  // this way is Only available in ---Middleware--- and ---Route handlers---
  const token = await getToken({ req });

  if (privatePages.has(req.nextUrl.pathname) && token) {
    // if user is trying to reach a private page
    return NextResponse.next(); // have token? Continue to the desired page
  } else if (privatePages.has(req.nextUrl.pathname) && !token) {
    const redirect = new URL("/", req.nextUrl.origin);
    return NextResponse.redirect(redirect);
  }

  return NextResponse.next();
}
