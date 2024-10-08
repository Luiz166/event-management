'use client';
import { useSession } from "next-auth/react";
import HomeNavbar from "@/components/HomeNavbar";
import CheckSession from "@/components/checkSession";
import { useState, useEffect } from "react";
import axios from "axios";
import { toast, ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';


export default function Events() {

    const { data: session, status } = useSession();
    let user_id = null;
    
    if(status !== "loading"){
        user_id = session.user.id;
    }

    const [venues, setVenues] = useState([]);
    
    const retrieveVenues = async () => {
        await axios
        .post(`/api/venues/${user_id}`)
        .then(res => {
            console.log(res)
            const data = res.data.venue;
            setVenues(data)
        })
        .catch(err =>{
            console.log(err)
            toast.error(err);
        })
    }
    useEffect(() => {
        if(user_id){
            retrieveVenues();
        }
    }, [user_id])
    

    const [formData, setFormData] = useState({
        title: "",
        desc: "",
        date: "",
        time: "",
        venue: "",
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData((prevData) => ({
            ...prevData,
            [name]: value,
        }))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const formattedVenue = parseInt(formData.venue, 10)
        const dateTimeString = `${formData.date}T${formData.time}:00.000Z`;
        const isoDateTime = new Date(dateTimeString).toISOString();
        await axios.post("/api/events/create", {
            title: formData.title,
            description: formData.desc,
            date: isoDateTime,
            venue_id: formattedVenue,
            user_id: user_id,
        })
        .then(res => {
            toast.success(res.data.message)
        })
        .catch(err => {
            console.log(err)
            toast.error(err.response.data.message)
        })
    }

    return (
        <CheckSession>
        <ToastContainer/>
        <div className="min-w-[100vw] min-h-[100vh] bg-black flex items-center flex-col">
            <HomeNavbar/>
            <div className="w-full flex flex-col items-center">
                <div className="container">
                    <h1 className="text-center font-semibold text-3xl dark:text-white">
                        Crie um evento!
                    </h1>
                    <form onSubmit={handleSubmit} className="flex mt-5 justify-center dark:text-white flex-col items-center space-y-3">
                        <div className="space-x-2">
                            <label htmlFor="title" className="">Titulo</label>
                            <input type="text" name="title" value={formData.title} className="text-black" onChange={handleChange} />
                            <label htmlFor="desc" className="">Descrição</label>
                            <input type="text" name="desc" value={formData.desc} className="text-black" onChange={handleChange} />
                        </div>
                        <div className="space-x-3">
                            <input className="text-black" type="date" value={formData.date} name="date" onChange={handleChange} />
                            <input className="text-black" type="time" value={formData.time} name="time" onChange={handleChange} />
                            <label htmlFor="venue">Local</label>
                            <select className="text-black" onChange={handleChange} value={formData.venue} id="venues" name="venue">
                                <option></option>
                                {venues.map((item) => (
                                    <option key={item.venue_id} value={item.venue_id}>{item.name}</option>
                                ))}
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
        </CheckSession>
    )
}