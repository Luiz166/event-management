import { testimonials } from "@/lib/data";
import { InfiniteMovingCards } from "./ui/InfiniteMovingCards";

export default function Testimonials(){
    return(
        <div className="flex flex-col items-center">
            <span className="text-white text-center">O que alguns de nossos clientes falam:</span>
            <div className="flex flex-col items-center">
                <InfiniteMovingCards 
                items={testimonials} 
                direction="right" 
                speed="slow"/>
            </div>
        </div>
    )
}