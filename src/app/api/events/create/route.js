import prisma from "@/lib/db";

export async function POST(req){
    try{

        const { title, description, date, time, venue_id, user_id } = await req.json();
        
        const event = await prisma.events.create({
            data: {
                title,
                description,
                date,
                time,
                venue_id,
                user_id,
            }
        })
        return new Response(JSON.stringify({ message: "Evento criado com sucesso", event }), { status: 201 });
    }catch(err){
        return new Response(JSON.stringify({ message: "Erro ao criar evento: ", err }), { status: 500 })
    }
}