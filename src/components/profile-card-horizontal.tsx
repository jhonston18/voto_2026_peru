
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

import ModalInfoCandidate from "@/components/modal-info-candidate"

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
    <div className="bg-white rounded-2xl shadow-lg border border-slate-100 overflow-hidden w-full hover:shadow-xl transition-shadow duration-300">
      <div className="flex flex-col sm:flex-row h-full"> {/* Cambio a columna en móviles muy pequeños */}

        {/* Sección Izquierda - Imagen */}
        <div className="relative shrink-0 w-full sm:w-40 md:w-48 lg:w-44">
          <div className="h-full min-h-[200px] bg-slate-100">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Users className="w-12 h-12 text-slate-400" />
              </div>
            )}
          </div>
          {/* Badge de puntuación */}
          <div className={`absolute top-3 left-3 ${scoreColor.bg} rounded-xl px-3 py-2 shadow-lg`}>
            <div className="flex items-center gap-1.5">
              <ScoreIcon className="w-4 h-4 text-white" />
              <span className="text-white text-xl font-bold">{percentage}%</span>
            </div>
          </div>
        </div>

        {/* Sección Derecha - Contenido */}
        <div className="p-5 flex flex-col flex-1 min-w-0"> {/* min-w-0 es la clave */}
          <div className="mb-3">
            <div className="flex items-start justify-between gap-3">
              <h2 className="text-lg font-bold text-slate-800 leading-tight truncate">
                {name}
              </h2>
              <span className={`shrink-0 text-[10px] font-semibold px-2.5 py-1 rounded-full ${scoreColor.light} ${scoreColor.text}`}>
                {percentage >= 80 ? "Confiable" : percentage >= 60 ? "Revisar" : "Alerta"}
              </span>
            </div>
            <p className="text-xs text-slate-500 line-clamp-2 mt-1">{description}</p>
          </div>

          {/* Info pills - Usamos flex-wrap para que no empujen la caja */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-2 py-1">
              <Users className="w-3 h-3 text-slate-500" />
              <span className="text-[10px] font-medium text-slate-700">{party}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-slate-50 border border-slate-100 rounded-full px-2 py-1">
              <Building2 className="w-3 h-3 text-slate-500" />
              <span className="text-[10px] font-medium text-slate-700 truncate max-w-[120px]">{position}</span>
            </div>
          </div>

          {/* Stats y Botón */}
          <div className="mt-auto pt-4 flex flex-wrap items-center justify-between gap-4 border-t border-slate-50">
            <div className="flex gap-3">
              <div className="flex items-center gap-1.5">
                {complaints === 0 ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                <span className="text-xs font-bold text-slate-600">{complaints} Denuncias</span>
              </div>
              <div className="flex items-center gap-1.5">
                {lawsuits === 0 ? <CheckCircle2 className="w-4 h-4 text-emerald-500" /> : <XCircle className="w-4 h-4 text-red-500" />}
                <span className="text-xs font-bold text-slate-600">{lawsuits} Demandas</span>
              </div>
            </div>
            <div className="w-full flex justify-end">
              <ModalInfoCandidate />
            </div>
          </div>
        </div>
      </div>
    </div>
  )

}

