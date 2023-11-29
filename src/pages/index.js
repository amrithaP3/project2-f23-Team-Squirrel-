<<<<<<< HEAD
import Login from "../components/Login";


export default function LoginFunction() {
    return (
        <Login />

    )
=======
import { useRouter } from 'next/router';
import { useEffect } from "react";

export default function traininglogs() {
    const router = useRouter();
    useEffect(()=>{
        router.push("/login");
    },[]);
>>>>>>> e6e891141ec3f33efd16bd51dbb0877b2b49378d
}