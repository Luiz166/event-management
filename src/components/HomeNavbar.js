import { Menu, MenuItem, HoveredLink } from "@/components/ui/NavbarMenu";
import { useState } from "react";

export default function HomeNavbar(){
    const [active, setActive] = useState(null);
    return(
        <Menu setActive={setActive}>
        <MenuItem setActive={setActive} active={active} item={'Home'}>
            <div className="flex flex-col space-y-4 text-sm">
                <HoveredLink href="/home/">Home</HoveredLink>
            </div>
        </MenuItem>
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
                <HoveredLink href="/home/signout">Sair</HoveredLink>
            </div>
        </MenuItem>
        </Menu>
    )
}