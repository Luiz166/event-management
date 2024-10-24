"use client";
import axios from "axios";
import { HoverEffect } from "./ui/CardHover";
import { useState, useEffect } from "react"

export default function ShowEvents({ user_id }){
    const [events, setEvents] = useState([]);

    const fetchEvents = async () => {
        await axios
        .post(`/api/events/${user_id}`)
        .then(res => {
            const data = res.data.event;
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
            {/* <HoverEffect items={{ title: events.title, 
                description: events.description,
                link: `/home/events/${events.event_id}` }}/> */}
            {events.length > 0 ?
            <HoverEffect items={events}/> :
            <span>Você não tem eventos criados</span>
             }
        </div>
    )
}