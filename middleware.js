// import { NextResponse } from "next/server";

import { auth } from "./app/_lib/auth";

// export function middleware(req, res, next) {
//   return NextResponse.redirect(new URL("/about", req.url));
// }

export const middleware = auth;

//middleware will for paths specified in matcher
//so we are making sure that only /account is protected
export const config = {
  matcher: ["/account"],
};
