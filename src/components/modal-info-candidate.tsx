

import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { ChevronRight } from "lucide-react"

export default function ModalInfoCandidate() {
  return (
    <Dialog>
      <DialogTrigger className="text-white bg-blue-600 hover:bg-blue-700 dark:text-white " asChild>{/* este es el boton que habre el dialog */}
        {/* Botón de Acción - Estilo Moderno */}
        <button
          className="w-full bg-[#444] text-xs/2 font-black uppercase tracking-[0.2em] px-4 py-4 rounded-2xl transition-all shadow-md flex items-center justify-center gap-2 dark:bg-primary/20 group/btn"
        >
          Ver perfil completo
          <ChevronRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
        </button>
      </DialogTrigger>
      <DialogContent>{/**Este es el modal */}
        <DialogHeader>
          <DialogTitle>Scrollable Content</DialogTitle>
          <DialogDescription>
            This is a dialog with scrollable content.
          </DialogDescription>
        </DialogHeader>
        <div className="-mx-4 no-scrollbar max-h-[50vh] overflow-y-auto px-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-normal">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          ))}
        </div>
      </DialogContent>
    </Dialog>
  )
}


