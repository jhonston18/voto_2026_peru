

import {
  Shield,
  ShieldCheck,
  ShieldAlert,
  Scale,
  FileWarning,
  Building2,
  Users,
  ChevronRight,
} from "lucide-react"
import ModalInfoCandidate from "./modal-info-candidate"

interface ProfileCardVerticalProps {
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
  if (percentage >= 80) return { bg: "bg-emerald-500", text: "text-emerald-500", light: "bg-emerald-50" }
  if (percentage >= 60) return { bg: "bg-amber-500", text: "text-amber-500", light: "bg-amber-50" }
  return { bg: "bg-red-500", text: "text-red-500", light: "bg-red-50" }
}

function getScoreIcon(percentage: number) {
  if (percentage >= 80) return ShieldCheck
  if (percentage >= 60) return Shield
  return ShieldAlert
}

export function ProfileCardVertical({
  name,
  percentage,
  description,
  party,
  position,
  imageUrl,
  complaints = 0,
  lawsuits = 0,
  onViewProfile,
}: ProfileCardVerticalProps) {
  const scoreColor = getScoreColor(percentage)
  const ScoreIcon = getScoreIcon(percentage)

  return (
    <div className="group bg-card rounded-3xl shadow-sm border border-border overflow-hidden w-full hover:shadow-xl hover:ring-1 hover:ring-primary/10 transition-all duration-500">

      {/* Header con Score - Estilo Banner */}
      <div className={`${scoreColor.bg} px-6 py-4 flex items-center justify-between relative overflow-hidden`}>
        {/* Decoración de fondo para el header */}
        <div className="absolute right-[-10%] top-[-20%] opacity-20 transform rotate-12">
          <ScoreIcon className="w-24 h-24 text-white" />
        </div>

        <div className="flex items-center gap-2.5 z-10">
          <div className="bg-white/20 backdrop-blur-md p-1.5 rounded-lg">
            <ScoreIcon className="w-5 h-5 text-white" />
          </div>
          <span className="text-white text-[10px] uppercase font-black tracking-[0.1em]">
            {percentage >= 80 ? "Candidato Confiable" : percentage >= 60 ? "Bajo Revisión" : "Alerta Crítica"}
          </span>
        </div>
        <span className="text-white text-3xl font-mono font-black z-10 tracking-tighter">
          {percentage}%
        </span>
      </div>

      <div className="p-6">
        {/* Imagen y Nombre - Layout Vertical */}
        <div className="flex items-start gap-4 mb-6">
          <div className="w-24 h-24 bg-muted rounded-2xl overflow-hidden shrink-0 ring-4 ring-secondary/50 group-hover:ring-primary/10 transition-all duration-500">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Users className="w-8 h-8 text-muted-foreground/30" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-primary text-xl font-bold font-heading text-foreground leading-[1.1] mb-2 line-clamp-2 tracking-tight group-hover: transition-colors">
              {name}
            </h2>
            <p className="text-xs text-muted-foreground/80 font-medium leading-relaxed line-clamp-2 italic">
              "{description}"
            </p>
          </div>
        </div>

        {/* Info Badges - Estilo Listado */}
        <div className="grid gap-2 mb-6">
          <div className="flex items-center gap-3 bg-secondary/40 border border-border/40 rounded-xl px-3 py-2.5">
            <Users className="w-4 h-4 text-primary/70" />
            <span className="text-[11px] font-bold uppercase tracking-wide text-secondary-foreground truncate">{party}</span>
          </div>
          <div className="flex items-center gap-3 bg-secondary/40 border border-border/40 rounded-xl px-3 py-2.5">
            <Building2 className="w-4 h-4 text-primary/70" />
            <span className="text-[11px] font-bold uppercase tracking-wide text-secondary-foreground line-clamp-1">{position}</span>
          </div>
        </div>

        {/* Stats de Antecedentes - Diseño de Cuadrículas */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          <div className={`rounded-2xl p-3 border ${complaints === 0 ? "bg-emerald-500/5 border-emerald-500/10" : "bg-red-500/5 border-red-500/10"}`}>
            <div className="flex items-center gap-2 mb-1">
              <FileWarning className={`w-3.5 h-3.5 ${complaints === 0 ? "text-emerald-500" : "text-red-500"}`} />
              <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Denuncias</span>
            </div>
            <span className={`text-2xl font-mono font-black ${complaints === 0 ? "text-emerald-600" : "text-red-600"}`}>
              {complaints}
            </span>
          </div>

          <div className={`rounded-2xl p-3 border ${lawsuits === 0 ? "bg-emerald-500/5 border-emerald-500/10" : "bg-red-500/5 border-red-500/10"}`}>
            <div className="flex items-center gap-2 mb-1">
              <Scale className={`w-3.5 h-3.5 ${lawsuits === 0 ? "text-emerald-500" : "text-red-500"}`} />
              <span className="text-[10px] font-black uppercase tracking-tighter text-muted-foreground">Demandas</span>
            </div>
            <span className={`text-2xl font-mono font-black ${lawsuits === 0 ? "text-emerald-600" : "text-red-600"}`}>
              {lawsuits}
            </span>
          </div>
        </div>

        {/* Botón de Acción - Estilo Moderno */}
        <div className="group/btn">
          <ModalInfoCandidate />
        </div>
      </div>
    </div>
  )
}
