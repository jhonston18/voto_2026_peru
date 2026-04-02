
import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Scale,
  FileWarning,
  Building2,
  Users,
  ChevronRight,
  CheckCircle2,
  XCircle,
} from "lucide-react"


import Boton from "./boton"

interface ProfileCardHorizontalProps {
  name: string
  percentage: number
  description: string
  party: string
  position: string
  imageUrl?: string
  complaints?: number
  lawsuits?: number
  onViewProfile?: () => void
}

function getScoreColor(percentage: number) {
  if (percentage >= 80) return { bg: "bg-emerald-500", text: "text-emerald-500", light: "bg-emerald-50", ring: "ring-emerald-200" }
  if (percentage >= 60) return { bg: "bg-amber-500", text: "text-amber-500", light: "bg-amber-50", ring: "ring-amber-200" }
  return { bg: "bg-red-500", text: "text-red-500", light: "bg-red-50", ring: "ring-red-200" }
}

function getScoreIcon(percentage: number) {
  if (percentage >= 80) return ShieldCheck
  if (percentage >= 60) return Shield
  return ShieldAlert
}

export function ProfileCardHorizontal({
  name,
  percentage,
  description,
  party,
  position,
  imageUrl,
  complaints = 0,
  lawsuits = 0,
  onViewProfile,
}: ProfileCardHorizontalProps) {

  const scoreColor = getScoreColor(percentage)
  const ScoreIcon = getScoreIcon(percentage)

  // Dentro de ProfileCardHorizontal.tsx

  return (
    <div className="group rounded-2xl border border-border bg-card hover:ring-1 hover:ring-primary/20 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden w-full">
      <div className="flex flex-col sm:flex-row h-full">
        
        {/* Sección Izquierda - Imagen */}
        <div className="relative shrink-0 w-full sm:w-40 md:w-48 lg:w-44 overflow-hidden">
          <div className="h-full min-h-[180px] bg-muted/50 flex items-center justify-center">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" />
            ) : (
              <Users className="w-12 h-12 text-muted-foreground/20" />
            )}
          </div>
          
          <div className={`absolute top-3 left-3 ${scoreColor.bg} rounded-xl px-2.5 py-1.5 shadow-2xl ring-2 ring-background/20`}>
            <div className="flex items-center gap-1.5">
              <ScoreIcon className="w-4 h-4 text-white" />
              {/* Usamos Mono para números: se ve más técnico y preciso */}
              <span className="text-white text-lg font-mono font-black">{percentage}%</span>
            </div>
          </div>
        </div>

        {/* Sección Derecha - Contenido */}
        <div className="p-6 flex flex-col flex-1 min-w-0">
          <div className="mb-4">
            <div className="flex items-start justify-between gap-4">
              <h2 className="text-xl md:text-2xl font-bold font-heading text-primary leading-[1.1] tracking-tight ">
                {name}
              </h2>
              <span className={`shrink-0 text-[10px] uppercase tracking-[0.15em] font-black px-3 py-1.5 rounded-lg ${scoreColor.text} border border-current/10`}>
                {percentage >= 80 ? "Confiable" : percentage >= 60 ? "Revisar" : "Alerta"}
              </span>
            </div>
            {/* Texto descriptivo con interlineado suave */}
            <p className="text-sm text-muted-foreground/80 line-clamp-2 mt-3 leading-relaxed font-medium italic">
              "{description}"
            </p>
          </div>

          {/* Info Pills - Estilo Minimalista */}
          <div className="flex flex-wrap gap-2 mb-6">
            <div className="inline-flex items-center gap-2 bg-secondary/30 hover:bg-secondary/80 border border-border/50 rounded-md px-3 py-1 transition-colors">
              <Users className="w-3.5 h-3.5 text-primary/60" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-foreground">{party}</span>
            </div>
            <div className="inline-flex items-center gap-2 bg-secondary/30 hover:bg-secondary/80 border border-border/50 rounded-md px-3 py-1 transition-colors">
              <Building2 className="w-3.5 h-3.5 text-primary/60" />
              <span className="text-[11px] font-bold uppercase tracking-wider text-secondary-foreground truncate max-w-[160px]">{position}</span>
            </div>
          </div>

          {/* Footer - Tipografía de datos */}
          <div className="mt-auto pt-5 flex flex-wrap items-center justify-between gap-4 border-t border-border/40">
            <div className="flex gap-5">
              <div className="flex items-center gap-2">
                <div className={`p-1 rounded-full ${complaints === 0 ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                  {complaints === 0 ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <XCircle className="w-3.5 h-3.5 text-red-500" />}
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-tighter text-muted-foreground">
                  <span className={complaints > 0 ? "text-red-500" : ""}>{complaints}</span> Denuncias
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className={`p-1 rounded-full ${lawsuits === 0 ? 'bg-emerald-500/10' : 'bg-red-500/10'}`}>
                  {lawsuits === 0 ? <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" /> : <XCircle className="w-3.5 h-3.5 text-red-500" />}
                </div>
                <span className="text-[11px] font-mono font-bold uppercase tracking-tighter text-muted-foreground">
                   <span className={lawsuits > 0 ? "text-red-500" : ""}>{lawsuits}</span> Demandas
                </span>
              </div>
            </div>
            
            <div className="w-full flex justify-end group/btn ">
              <Boton />
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

