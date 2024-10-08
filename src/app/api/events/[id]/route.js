import prisma from "@/lib/db";


export async function POST(req, params){
    try{
        const { user_id } = params;

        const event = await prisma.events.findMany({
            where: {
                user_id
            }
        })
        
        return new Response(JSON.stringify({ message: "All events selected with success", event }), {status: 201})
    }catch(err){
        return new Response(JSON.stringify({ message: "Error when trying to select events", err }), {status: 500})
    }
}