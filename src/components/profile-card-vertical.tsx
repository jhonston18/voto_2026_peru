

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
    <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden max-w-xs hover:shadow-xl transition-shadow duration-300">
      {/* Header with score */}
      <div className={`${scoreColor.bg} px-5 py-3 flex items-center justify-between`}>
        <div className="flex items-center gap-2">
          <ScoreIcon className="w-5 h-5 text-white" />
          <span className="text-white text-sm font-medium">
            {percentage >= 80 ? "Candidato Confiable" : percentage >= 60 ? "Revisar Antecedentes" : "Alerta"}
          </span>
        </div>
        <span className="text-white text-2xl font-bold">{percentage}%</span>
      </div>

      <div className="p-5">
        {/* Profile image and name */}
        <div className="flex gap-4 mb-4">
          <div className="w-20 h-20 bg-linear-to-br from-slate-100 to-slate-200 rounded-xl overflow-hidden shrink-0 ring-2 ring-slate-100">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Users className="w-8 h-8 text-slate-400" />
              </div>
            )}
          </div>
          <div className="flex-1 min-w-0">
            <h2 className="text-lg font-bold text-slate-800 leading-tight mb-1 line-clamp-2">
              {name}
            </h2>
            <p className="text-xs text-slate-500 line-clamp-2">{description}</p>
          </div>
        </div>

        {/* Info badges */}
        <div className="space-y-2 mb-4">
          <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
            <Users className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-700">{party}</span>
          </div>
          <div className="flex items-center gap-2 bg-slate-50 rounded-lg px-3 py-2">
            <Building2 className="w-4 h-4 text-slate-500" />
            <span className="text-sm text-slate-700 line-clamp-1">{position}</span>
          </div>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className={`rounded-lg px-3 py-2 ${complaints === 0 ? "bg-emerald-50" : "bg-red-50"}`}>
            <div className="flex items-center gap-1.5 mb-0.5">
              <FileWarning className={`w-3.5 h-3.5 ${complaints === 0 ? "text-emerald-600" : "text-red-600"}`} />
              <span className={`text-xs font-medium ${complaints === 0 ? "text-emerald-600" : "text-red-600"}`}>
                Denuncias
              </span>
            </div>
            <span className={`text-lg font-bold ${complaints === 0 ? "text-emerald-700" : "text-red-700"}`}>
              {complaints}
            </span>
          </div>
          <div className={`rounded-lg px-3 py-2 ${lawsuits === 0 ? "bg-emerald-50" : "bg-red-50"}`}>
            <div className="flex items-center gap-1.5 mb-0.5">
              <Scale className={`w-3.5 h-3.5 ${lawsuits === 0 ? "text-emerald-600" : "text-red-600"}`} />
              <span className={`text-xs font-medium ${lawsuits === 0 ? "text-emerald-600" : "text-red-600"}`}>
                Demandas
              </span>
            </div>
            <span className={`text-lg font-bold ${lawsuits === 0 ? "text-emerald-700" : "text-red-700"}`}>
              {lawsuits}
            </span>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onViewProfile}
          className="w-full bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium px-4 py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2 group"
        >
          Ver perfil completo
          <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
        </button>
      </div>
    </div>
  )
}
