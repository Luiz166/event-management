'use client';
import CheckSession from "@/components/checkSession";
import ShowEvents from "@/components/ShowEvents";
import { useSession } from "next-auth/react";
import HomeNavbar from "@/components/HomeNavbar";

export default function HomePage(){
    const { data: session, status } = useSession();
    let user_id = null;
    
    if(status !== "loading"){
        user_id = session.user.id;
    }
    
    return(
        <CheckSession>
        <div>
            <HomeNavbar/>
            <div className="w-full flex flex-col items-center">
                <div className="container p-2 rounded-lg">
                    <h1 className="text-3xl text-center font-semibold dark:text-white">Olá, cliente</h1>

                    <div>
                        <span className="dark:text-white">Eventos próximos:</span>

                        <div>
                            <ShowEvents user_id={user_id}/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </CheckSession>
    )
}