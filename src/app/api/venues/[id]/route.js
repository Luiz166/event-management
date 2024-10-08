import prisma from "@/lib/db";

export async function POST(req, params){
    try{
        const { user_id } = params;

        const venue = await prisma.venues.findMany({
            where: {
                user_id
            }
        })
        return new Response(JSON.stringify({ message: "Locais selecionados com suceeso", venue }), { status: 201 })
    }catch(err){
        console.log(err);
        return new Response(JSON.stringify({ message: "Ocorreu um erro ao selecionar os locais" }), { status: 500 })
    }
}