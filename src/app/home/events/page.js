'use client';
import { useSession } from "next-auth/react";
import HomeNavbar from "@/components/HomeNavbar";

export default function Events() {

    const { data: session, status } = useSession()
    if (status === "loading") {
        return (
            <div>
                <p>loading</p>
            </div>
        )
    }
    if (!session) {

        return (
            <div>
                <Link href={'/login'}>Você não está logado, clique aqui para logar.</Link>
            </div>
        )
    }

    return (
        <div className="min-w-[100vw] min-h-[100vh] bg-black flex items-center flex-col">
            <HomeNavbar/>
            <div className="w-full flex flex-col items-center">
                <div className="container">
                    <h1 className="text-center font-semibold text-3xl dark:text-white">
                        Crie um evento!
                    </h1>
                    <form className="flex mt-5 justify-center dark:text-white flex-col items-center space-y-3">
                        <div className="space-x-2">
                            <label htmlFor="title" className="">Titulo</label>
                            <input type="text" name="title"/>
                            <label htmlFor="desc" className="">Descrição</label>
                            <input type="text" name="desc"/>
                        </div>
                        <div className="space-x-3">
                            <input className="text-black" type="date"/>
                            <input className="text-black" type="time"/>
                            <label htmlFor="venue">Local</label>
                            <select className="text-black" id="venues" name="venue">
                                <option value="teste">teste</option>
                            </select>
                        </div>
                        <button type="submit" className="border border-white/[0.3] px-5 py-1 rounded-lg hover:bg-white/[0.5] duration-300 ease-in-out">Criar</button>
                    </form>
                    <h1 className="font-semibold text-3xl dark:text-white">
                        Seus eventos
                    </h1>
                </div>
            </div>
        </div>
    )
}