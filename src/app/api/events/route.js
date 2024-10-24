import prisma from "@/lib/db";

export async function POST(){
    try{
        const events = await prisma.events.findMany()

        return new Response(JSON.stringify({ message: "All events selected", events}), {status: 201})
    }catch(err){
        console.log(err)
        return new Response(JSON.stringify({ message: "Erro:", err }), {status: 500})
    }
}