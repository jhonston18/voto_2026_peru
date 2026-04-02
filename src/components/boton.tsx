
import { ChevronRight } from "lucide-react"
import Link from "next/link"

export default function Boton() {

    return (


            <Link href={`/dashboard/info-candidato/1`}
            className="bg-blue-600 text-xs/2 font-black uppercase tracking-[0.2em] px-4 py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 dark:bg-blue-600 text-white group/btn"
        >
            Ver perfil completo
            <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </Link>
        
    )
}