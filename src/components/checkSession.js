import { useSession } from "next-auth/react"
import Link from "next/link"

export default function CheckSession({ children }){
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
                <Link href={'/login'} className="text-black">Você não está logado, clique aqui para logar.</Link>
            </div>
        )
    }
    return session ? children : null
}