'use client';
import { useState } from "react";
import { useSession } from "next-auth/react";
import { Menu, MenuItem, HoveredLink } from "@/components/ui/NavbarMenu";

export default function Events() {
    const [active, setActive] = useState(null);

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
            <Menu setActive={setActive}>
                <MenuItem setActive={setActive} active={active} item={'Eventos'}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/home/events/">Seus eventos</HoveredLink>
                        <HoveredLink href="/home/events/">Criar eventos</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item={'Locais'}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/home/venues/">Seus locais</HoveredLink>
                        <HoveredLink href="/home/venues/">Criar locais</HoveredLink>
                    </div>
                </MenuItem>
                <MenuItem setActive={setActive} active={active} item={'Perfil'}>
                    <div className="flex flex-col space-y-4 text-sm">
                        <HoveredLink href="/home/">Configurações</HoveredLink>
                        <HoveredLink href="/home/signout/">Sair</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>

            <div className="w-full flex flex-col items-center">
                <div className="container">
                    <h1 className="text-center font-semibold text-3xl dark:text-white">
                        Crie um evento!
                    </h1>
                    <form className="flex justify-center dark:text-white flex-col items-center space-y-3">
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