'use client';
import CheckSession from "@/components/checkSession";
import HomeNavbar from "@/components/HomeNavbar";
import axios from "axios";
import { useSession } from "next-auth/react";
import { useState } from "react";
import 'react-toastify/dist/ReactToastify.css';
import { toast, ToastContainer } from "react-toastify";

export default function Venues(){

    const [name, setName] = useState("");
    const [address, setAddress] = useState("");
    const [capacity, setCapacity] = useState("");
    const { data: session } = useSession();
    const user_id = session.user.id;

    const handleNameChange = (e) =>{
        setName(e.target.value);
    }

    const handleAddressChange = (e) => {
        setAddress(e.target.value);
    }

    const handleCapacityChange = (e) => {
        setCapacity(e.target.value);
    }

    const capacityFormatted = parseInt(capacity, 10);

    const handleFormSubmit = async (e) => {
        e.preventDefault();

        if(
            !name, 
            !address,
            !capacity
        ){
            toast.error("Preencha todos os campos")
        }else{
            await axios
            .post("/api/venues/create", {
                name: name,
                address: address,
                capacity: capacityFormatted,
                user_id: user_id,
            })
            .then(res => {
                toast.success(res.data.message)
            })
            .catch(err => {
                console.log(err)
                toast.error(err.response.data.message);
            })
        }
    }


    return(
        <CheckSession>
            <ToastContainer/>
            <div className="min-w-[100vw] min-h-[100vh] bg-black flex items-center flex-col">
                <HomeNavbar/>
                <div className="mt-5 dark:text-white">
                    <span>Você não tem locais, crie um agora!</span>
                    <form onSubmit={handleFormSubmit} className="mt-5 flex items-center flex-col space-y-2">
                        <div className="flex">
                            <input className="w-fit bg-transparent border border-white/[0.3] px-2 py-1 rounded-lg outline-none" type="text" value={name} onChange={handleNameChange} placeholder="Nome" />
                        </div>
                        <div className="flex">
                            <input className="w-fit bg-transparent border border-white/[0.3] px-2 py-1 rounded-lg outline-none" value={address} onChange={handleAddressChange} type="text" placeholder="Endereço"/>
                        </div>
                        <div className="flex space-x-2 items-center">
                            <label htmlFor="capacity">Capacidade</label>
                            <input className="w-28 bg-transparent border border-white/[0.3] px-2 py-1 rounded-lg outline-none" value={capacity} onChange={handleCapacityChange} type="number" id="capacity"/>
                        </div>
                        <button type="submit" className="border border-white/[0.5] px-5 py-1 rounded-lg hover:bg-white/[0.5] duration-300 ease-in-out">Criar</button>
                    </form>
                </div>
                    <h1 className="text-center font-semibold dark:text-white mt-2 text-3xl">Seus locais</h1>
            </div>
        </CheckSession>
    )
}