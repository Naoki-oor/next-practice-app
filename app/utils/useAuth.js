import { useState, useEffect } from "react"
import { useRouter } from "next/navigation"
import { jwtVerify } from "jose"

const useAuth = () => {
    const [loginUserEmail, setLoginUseEmail] = useState("")
    const router = useRouter()
    useEffect(() => {
        const checkToken = async() => {
        const token = localStorage.getItem("token")

    if(!token){
        router.push("/user/login")
    }
    try{
        const secretkey = new TextEncoder().encode("next-market-route-handlers")
        const decodedjwt = await jwtVerify(token, secretkey)
        setLoginUseEmail(decodedjwt.payload.email)

    }catch(error){
        router.push("/user/login")
    }
    }
    checkToken()
    },[router])
    return loginUserEmail
}

export default useAuth