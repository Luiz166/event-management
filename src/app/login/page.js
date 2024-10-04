'use client';

import { signIn } from "next-auth/react";

import { Boxes } from "@/components/ui/BackgroundBoxes";
import Link from "next/link";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

export default function Login(){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }
    const handleForm = async (e) => {
        e.preventDefault();

        const res = await signIn("credentials", {
            redirect: true,
            callbackUrl: "/home",
            email: email,
            password: password,
        })

        if(res.error){
            console.log(res.error)
            toast.error(res.error)
        }else{
            console.log("logado com sucesso");
            toast.success('Logado com sucesso')
        }
    }

    return(
        <div className="bg-slate-900 w-[100vw] h-[100vh] relative flex justify-center items-center overflow-hidden">
            <ToastContainer/>
            <div className="absolute inset-0">
                <Boxes/>
            </div>
            <div className="bg-slate-950 w-[40vw] h-[60vh] z-50 rounded-lg flex items-center justify-center flex-col shadow-2xl">
                <h1 className="text-5xl font-semibold mb-5 dark:text-white">Eventify</h1>
                <span className="font-light text-sm text-white-200 uppercase tracking-widest mb-5">Aonde a magia acontece</span>
                <h2 className="text-2xl dark:text-white">Logar</h2>
                <form className="flex flex-col space-y-4 mt-5 w-[30vw] items-center" onSubmit={handleForm}>
                    <div className="w-full">
                        <input type="email" placeholder="e-mail" value={email} onChange={handleEmailChange} className="px-2 py-1 outline-none text-black rounded-lg w-full" />
                    </div>
                    <div className="w-full">
                        <input type="password" placeholder="senha" value={password} onChange={handlePasswordChange} className="px-2 py-1 outline-none text-black rounded-lg w-full" />
                    </div>
                    <button type="submit" className="uppercase dark:text-white tracking-widest font-light text-sm p-2 px-4 border shadow-xl border-white/[0.2] rounded-lg hover:bg-white/[0.4] duration-300 ease-in-out">entrar</button>
                </form>
                <span className="mt-5 dark:text-white">Não tem uma conta?
                    <Link href={'/register'} className="underline text-purple-500 mx-2">Cadastre-se</Link>
                </span>
            </div>
        </div>
    )
}