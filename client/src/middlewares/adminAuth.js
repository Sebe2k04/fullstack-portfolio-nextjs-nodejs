import { jwtVerify } from "jose";
import { NextResponse } from "next/server";

export const adminAuth = async (req) => {
  const token = req.cookies.get("adminToken")?.value;

  if (!token) {
    // Redirect to login if no token is found
    return NextResponse.redirect(new URL("/admin", req.url));
  }

  try {
    // Verify JWT token
    const { payload } = await jwtVerify(
      token,
      new TextEncoder().encode(process.env.NEXT_PUBLIC_JWT_SECRET)
    );

    // Proceed to the requested page
    return null;
  } catch (error) {
    // Token verification failed, redirect to login
    return NextResponse.redirect(new URL("/admin", req.url));
  }
};
