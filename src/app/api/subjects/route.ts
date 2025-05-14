import { getToken } from "next-auth/jwt";
import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const token = await getToken({ req });

  const response = await fetch(`${process.env.API}/subjects`, {
    headers: {
      token: token?.token || "",
    },
  });

  const payload = await response.json();

  return NextResponse.json(payload, { status: response.status, statusText: response.statusText });
}
