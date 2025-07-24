import { getToken } from "next-auth/jwt"
import { NextResponse } from "next/server";

export const middleware = async(req) =>{
 const token = await getToken({req});
 const isToken = Boolean(token);
 const isAdmin = token?.role === "admin";
 const isAdminSpecificRoute = req.nextUrl.pathname.startsWith("/dashboard");

 if(isAdminSpecificRoute && !isAdmin){
    const callback = encodeURIComponent(req.nextUrl.pathname);
   return NextResponse.redirect(new URL(`/api/auth/signin?callback=${callback}`, req.url));
 }
 return NextResponse.next()
}