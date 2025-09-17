import { NextResponse } from "next/server";
import { SignJWT } from "jose";
import supabase from "@/app/utils/database";

export async function POST(request) {
    const reqBody = await request.json()

    try{
        const{data, error} = await supabase.from("users").select().eq("email", reqBody.email).single()
        if(!error){
            if(reqBody.password === data.password){
                const secretkey = new TextEncoder().encode("next-market-route-handlers")
                const payload = {
                    email: reqBody.email,
                }
                const token = await new SignJWT(payload).
                setProtectedHeader({alg: "HS256"}).setExpirationTime("1d").sign(secretkey)
                console.log(token)
            return NextResponse.json({
            message: "ログイン成功"
        })
        }else{
            return NextResponse.json({
            message: "ログイン失敗:パスワードが間違っています"
        })
        }
        }else{
            return NextResponse.json({
                message: "ログイン失敗:ユーザー登録をしてください"
            })
        }
    }catch{
        return NextResponse.json({
            message: "ログイン失敗"
        })
    }
}