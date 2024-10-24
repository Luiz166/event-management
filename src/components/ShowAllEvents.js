"use client";
import axios from "axios";
import { HoverEffect } from "./ui/CardHover";
import { useState, useEffect } from "react"

export default function ShowAllEvents(){
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        await axios
        .post(`/api/events`)
        .then(res => {
            const data = res.data.events;
            setEvents(data)
            console.log(events)
        })
        .catch(err => {
            console.log(err)
        })
    }

    useEffect(() => {
        fetchEvents()
    },[])
    return(
        <div>
            {events.length > 0 ?
            <HoverEffect items={events}/> :
            <span>Nenhum evento no momento</span>
             }
        </div>
    )
}