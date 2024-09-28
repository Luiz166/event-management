import prisma from "@/lib/db";

export async function POST(req){
    try{
        const { name, address, capacity, user_id } = await req.Json();

        const venue = await prisma.venues.create({
            data: {
                name,
                address,
                capacity,
                user_id
            }
         })

         return new Response(JSON.stringify({ message: 'Local criado com sucesso: ', venue }), { status: 201 })
    }catch (err){
        return new Response(JSON.stringify({ message: 'Erro ao criar locar:', err }), { status: 500 })
    }
}