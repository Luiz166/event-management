'use client';
import CheckSession from "@/components/checkSession";
import { HoveredLink, Menu, MenuItem } from "@/components/ui/NavbarMenu";
import Link from "next/link";
import { useState } from "react";

export default function HomePage(){
    const [active, setActive] = useState(null);
    
    return(
        <CheckSession>

        <div className="min-w-[100vw] min-h-[100vh] bg-black flex flex-col items-center ">
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
                        <HoveredLink href="/home/config/">Configurações</HoveredLink>
                        <HoveredLink href="/home/signout/">Sair</HoveredLink>
                    </div>
                </MenuItem>
            </Menu>
            
            <div className="w-full flex flex-col items-center">
                <div className="container p-2 rounded-lg">
                    <h1 className="text-3xl text-center font-semibold">Olá, cliente</h1>

                    <div>
                        <span>Eventos próximos:</span>
                        <div>
                            <span>Você não tem eventos, crie um <Link className="text-purple-400 underline" href={'/home/events/'}>agora</Link></span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </CheckSession>
    )
}