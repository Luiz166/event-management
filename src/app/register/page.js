'use client';
import Image from "next/image";
import Img from '@/public/woman-looking-at-phone-at-night.jpg'
import { useState } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import Link from "next/link";


export default function Register() {

    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleUsernameChange = (e) => {
        setUsername(e.target.value);
    }

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value);
    }

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        await axios.post('/api/users/register/', {
            username: username,
            email: email,
            password: password,
        })
        .then(res => {
            toast.success(res.data.message);

        })
        .catch(err => {
            toast.error(err.response.data.message);
        })
    }

    return (
        <div className="flex flex-col justify-center items-center w-[100vw] h-[100vh] bg-slate-800 ">
            <ToastContainer/>
            <div className="bg-slate-900 p-3 px-5 rounded-lg flex flex-row items-center space-x-5">
                <div className="flex flex-col justify-center items-center w-[20vw]">
                    <h1 className="font-semibold text-5xl mb-10 shadow-xl">Eventify</h1>
                    <h2 className="text-2xl font-bold">Cadastre-se agora!

                    </h2>
                        <span className="font-light text-sm text-white-200">e fique a um passo de ser mais organizado</span>
                    <form className=" flex flex-col gap-5 mt-5 w-full" onSubmit={handleFormSubmit}>
                        <div>
                            <input type="text" onChange={handleUsernameChange} value={username} className="rounded-lg px-2 py-2 outline-none text-black w-full" placeholder="Seu Nome" />
                        </div>
                        <div>
                            <input type="email" onChange={handleEmailChange} value={email} className="rounded-lg px-2 py-2 outline-none text-black w-full" placeholder="email@email.com" />
                        </div>
                        <div>
                            <input type="password" onChange={handlePasswordChange} value={password} className="rounded-lg px-2 py-2 outline-none text-black w-full" placeholder="Senha" />
                        </div>
                        <button type="submit" className="border hover:bg-white/[0.4] ease-in-out duration-200 border-white/[0.2] text-sm rounded-lg bg-slate-950 p-2 shadow-xl tracking-widest uppercase">Criar</button>
                    </form>
                    <span className="mt-2">Já tem uma conta?
                        <Link href={'/login'} className="mx-2 underline text-purple-400">Logar</Link>
                    </span>
                </div>
                <div className="h-[60vh] w-[20vw]">
                    <Image src={Img} className="object-cover object-center w-full h-full" alt="woman-looking-at-phone" />
                </div>
            </div>
        </div>
    )
}