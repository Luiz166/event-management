import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Link from "next/link";

export default function Home() {
  return (
    <div className="background flex flex-col">
      <Navbar/>
      <main className="flex flex-1 items-center mt-32 flex-col">
        <span className="font-bold text-5xl">Crie momentos inesquecíveis.</span>
        <Link href='/register' className="mt-5 bg-slate-300 p-2 pr-5 pl-5 rounded-2xl text-black text-xl hover:bg-sky-600 hover:text-slate-200 duration-200 ease-in-out">Começar</Link>
      </main>
    </div>
  );
}
