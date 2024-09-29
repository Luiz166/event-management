'use client';

import { Boxes } from "@/components/ui/BackgroundBoxes";
import Link from "next/link";

export default function Login(){
    return(
        <div className="bg-slate-900 w-[100vw] h-[100vh] relative flex justify-center items-center overflow-hidden">
            <div className="absolute inset-0">
                <Boxes/>
            </div>
            <div className="bg-slate-950 w-[40vw] h-[60vh] z-50 rounded-lg flex items-center justify-center flex-col shadow-2xl">
                <h1 className="text-5xl font-semibold mb-5">Eventify</h1>
                <span className="font-light text-sm text-white-200 uppercase tracking-widest mb-5">Aonde a magia acontece</span>
                <h2 className="text-2xl">Logar</h2>
                <form className="flex flex-col space-y-4 mt-5 w-[30vw] items-center">
                    <div className="w-full">
                        <input type="email" placeholder="e-mail" className="px-2 py-1 outline-none text-black rounded-lg w-full" />
                    </div>
                    <div className="w-full">
                        <input type="password" placeholder="senha" className="px-2 py-1 outline-none text-black rounded-lg w-full" />
                    </div>
                    <button type="submit" className="uppercase tracking-widest font-light text-sm p-2 px-4 border shadow-xl border-white/[0.2] rounded-lg hover:bg-white/[0.4] duration-300 ease-in-out">entrar</button>
                </form>
                <span className="mt-5">Não tem uma conta?
                    <Link href={'/register'} className="underline text-purple-500 mx-2">Cadastre-se</Link>
                </span>
            </div>
        </div>
    )
}