'use client';
import Footer from "@/components/footer";
import Navbar from "@/components/navbar";
import Testimonials from "@/components/Testimonials";
import { AuroraBackground } from "@/components/ui/AuroraBackground";
import { TextRevealCard, TextRevealCardTitle } from "@/components/ui/TextReveal";
import { motion } from "framer-motion";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  const handleClick = () => {
    router.push('/register')
  }

  return (

    <AuroraBackground className={'overflow-hidden'} >
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex flex-col gap-4 items-center justify-center px-4"
      >

        <div className="flex h-screen w-screen flex-col ">

          <Navbar />
          <main className="flex flex-1 items-center mt-32 flex-col">
            <h1 className="text-3xl text-white font-semibold">
              Gerencie suas festas com mais praticidade
            </h1>
            <TextRevealCard text={'Você tem os eventos'} revealText={'Nós temos o poder'}>
              <TextRevealCardTitle className={'text-center'}>Passe o mouse por cima</TextRevealCardTitle>
            </TextRevealCard>
            <button onClick={handleClick} className="inline-flex uppercase tracking-widest h-12 animate-shimmer items-center justify-center rounded-md border border-slate-800 bg-[linear-gradient(110deg,#000103,45%,#1e2631,55%,#000103)] bg-[length:200%_100%] px-6 font-medium text-slate-400 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50">
              Começar
            </button>
            <div className="flex justify-center items-center min-h-[40vh]">
              <Testimonials />
            </div>
          </main>
          <Footer />
        </div>
      </motion.div>
    </AuroraBackground>
  );
}
