import Link from "next/link";

export default function Navbar() {
    return (
        <div>
            <nav class="p-1">
                    <div className="flex h-16 pl-5 justify-between items-center">
                        <h1 className="font-extrabold text-4xl">Eventify</h1>
                        <div className="flex space-x-4 pr-5">
                            <Link className="p-2 rounded-xl hover:bg-zinc-900 ease-in-out duration-300 text-xl" href={'/'}>Home</Link>
                            <Link className="p-2 rounded-xl hover:bg-zinc-900 ease-in-out duration-300 text-xl" href={'/about'}>Sobre nós</Link>
                            <Link className="p-2 rounded-xl hover:bg-zinc-900 ease-in-out duration-300 text-xl" href={'/register'}>Começar</Link>
                        </div>
                    </div>
            </nav>
        </div>
    )
};