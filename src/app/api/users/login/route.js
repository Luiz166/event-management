import prisma from "@/lib/db";
import bcrypt from 'bcrypt';

export async function POST(req){
    try{
        const { email, password } = await req.json();

        const user = await prisma.users.findUnique({
            where: { email },
        })

        if(!user){
            return new Response(JSON.stringify({ message: 'Usuário não encontrado' }), {status: 404});
        }

        const isPasswordValid = await bcrypt.compare(password, user.password);

        if(!isPasswordValid){
            return new Response(JSON.stringify({ message: 'Senha incorreta'}), { status: 401 } );
        }

        return new Response(JSON.stringify({ message: 'Logado com sucesso' }), { status: 200 });
    }catch(err){
        return new Response(JSON.stringify({ message: 'Erro ao logar', err }), { status: 500 });
    }
}