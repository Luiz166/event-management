'use client';
import { signOut } from "next-auth/react"

export default function Signout(){
    signOut({ callbackUrl: '/'})

}