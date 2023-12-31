"use client";
import { signIn, signOut } from "next-auth/react";
import Link from "next/link";

export const LoginButton = () => {
    return (
        <>
         Hi stranger,
            <button onClick={(() => signIn())} className="mr-3 hover:text-blue-500">
                login :)
            </button>
        </>
       
    )
}

export const LogoutButton = () => {
    return (
        <button onClick={(() => signOut())} className="mr-3">
            Sign out
        </button>
    )
}

export const RegisterButton = () => {
    return (
        <Link href="/register" className="mr-3">
            Register
        </Link>
    )
}

export const EmailBoardButton = () => {
    return (
        <Link href="/mails" className="mr-3">
            Access Email Board
        </Link>
    )
}