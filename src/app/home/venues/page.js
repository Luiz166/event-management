'use client';
import CheckSession from "@/components/checkSession";
import HomeNavbar from "@/components/HomeNavbar";

export default function Venues(){
    return(
        <CheckSession>
            <div className="min-w-[100vw] min-h-[100vh] bg-black flex items-center flex-col">
                <HomeNavbar/>
                <div className="mt-5 dark:text-white">
                    <span>Você não tem locais, crie um agora!</span>
                    <form className="mt-5 flex items-center flex-col space-y-2">
                        <div className="flex">
                            <input className="w-fit" type="text" placeholder="Nome" />
                        </div>
                        <div className="flex">
                            <input className="w-fit" type="text" placeholder="Endereço"/>
                        </div>
                        <div className="flex space-x-2 ">
                            <label htmlFor="capacity">Capacidade</label>
                            <input className="w-28" type="number" id="capacity"/>
                        </div>
                        <button type="submit" className="border border-white/[0.5] px-5 py-1 rounded-lg hover:bg-white/[0.5] duration-300 ease-in-out">Criar</button>
                    </form>
                </div>
                    <h1 className="text-center font-semibold dark:text-white mt-2 text-3xl">Seus locais</h1>
            </div>
        </CheckSession>
    )
}