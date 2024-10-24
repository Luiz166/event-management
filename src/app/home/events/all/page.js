'use client'
import CheckSession from "@/components/checkSession";
import { useSession } from "next-auth/react";
import HomeNavbar from "@/components/HomeNavbar";
import ShowAllEvents from "@/components/ShowAllEvents";

export default function AllEvents(){
    const { data: session, status } = useSession();
    let user_id = null;
    let username = null;
    
    if(status !== "loading"){
        user_id = session.user.id;
        username = session.user.username;
    }
    
    return(
        <CheckSession>
        <div className="min-w-[100vw] min-h-[100vh] bg-black flex items-center flex-col">
            <HomeNavbar/>
            <div className="w-full flex flex-col items-center">
                <div className="container p-2 rounded-lg">
                    <h1 className="text-3xl text-center font-semibold dark:text-white">Olá, {username}</h1>

                    <div>
                        <span className="dark:text-white">Todos os eventos:</span>

                        <div>
                            <ShowAllEvents/>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        </CheckSession>
    )
}