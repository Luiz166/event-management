'use client';
import { useState } from "react";
import { useSession } from "next-auth/react";

export default function Venues(){
    const [active, setActive] = useState(null);

    const { data: session, status } = useSession()
    if(status === "loading"){
        return(
            <div>
                <p>loading</p>
            </div>
        )
    }
    if(!session){

        return(
            <div>
                <Link href={'/login'}>Você não está logado, clique aqui para logar.</Link>
            </div>
        )
    }
}