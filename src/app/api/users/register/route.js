import prisma from "@/lib/db";
import bcrypt from 'bcrypt';

export async function POST(req){
    try{
        const { name, email, password } = await req.json();

        //checar se o usuario existe
        const existingUser = await prisma.users.findUnique({
            where: { email }
        })

        if(existingUser){
            return new Response(JSON.stringify({ message: 'usuário já existe'}), { status: 400 } );
        }

        //codificar senha
        const hashedPassword = await bcrypt.hash(password, 10);

        //criar novo usuário
        const user = await prisma.users.create({
            data: {
                name,
                email,
                password: hashedPassword,
            },
        })
    }catch(err){
        return new Response(JSON.stringify({ message: 'Erro ao cadastrar usuário'}), { status: 500 } );
    }
}