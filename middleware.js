import { NextResponse } from "next/server";
import { jwtVerify } from "jose";

export async function middleware(request) {
    const token = await request.headers.get("Authorization")?.split(" ")[1]

    if(!token){
        return NextResponse.json({
            message: "トークンがありません"
        })
    }
    try{
        const secretkey = new TextEncoder().encode("next-market-route-handlers")
        const decodedjwt = await jwtVerify(token, secretkey)
        return NextResponse.next()
    }catch{
        return NextResponse.json({
            message: "トークンが正しくないので、ログインしてください"
        })
    }
}

export const config = {
    matcher: [
        "/api/item/create", "/api/item/update/:path*", "/api/item/delete/:path*"
    ],
}