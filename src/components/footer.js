import Link from "next/link"

export default function Footer(){
    return(
        <div>
            <footer className="flex p-2 justify-center space-x-32">
                <div className="flex flex-col items-center">
                    <p>Eventify, te ajudando a se organizar melhor.</p>
                    <span>&copy; Copyright 2024, Eventify</span>
                    <div className="socials ">

                    </div>
                </div>
                <div className="flex items-center space-x-10">
                    <Link className="p-2 rounded-xl hover:bg-gray-100 hover:text-black ease-in-out duration-300" href={'/'}>Home</Link>
                    <Link className="p-2 rounded-xl hover:bg-gray-100 hover:text-black ease-in-out duration-300" href={'/about'}>Sobre nós</Link>
                    <Link className="p-2 rounded-xl hover:bg-gray-100 hover:text-black ease-in-out duration-300" href={'/register'}>Começar</Link>
                </div>
            </footer>
        </div>
    )
};