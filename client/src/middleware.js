import { NextResponse } from "next/server";
import { adminAuth } from "./middlewares/adminAuth";

export async function middleware(req, res) {
  if (req.nextUrl.pathname.startsWith("/admin")) {
    const adminResponse = await adminAuth(req);
    if (adminResponse) return adminResponse;
  }

  return NextResponse.next(); 
}

export const config = {
  matcher: ["/admin/secure/:path*"],
};
