

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

  return (
    <div className="bg-white rounded-2xl shadow-lg shadow-slate-200/50 border border-slate-100 overflow-hidden max-w-2xl hover:shadow-xl transition-shadow duration-300">
      <div className="flex">
        {/* Left section - Image and Score */}
        <div className="relative shrink-0">
          <div className="w-44 h-full min-h-[220px] bg-linear-to-br from-slate-100 to-slate-200">
            {imageUrl ? (
              <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full flex items-center justify-center">
                <Users className="w-12 h-12 text-slate-400" />
              </div>
            )}
          </div>
          {/* Score badge overlay */}
          <div className={`absolute top-3 left-3 ${scoreColor.bg} rounded-xl px-3 py-2 shadow-lg`}>
            <div className="flex items-center gap-1.5">
              <ScoreIcon className="w-4 h-4 text-white" />
              <span className="text-white text-xl font-bold">{percentage}%</span>
            </div>
          </div>
        </div>

        {/* Right section - Content */}
        <div className="flex-1 p-5 flex flex-col">
          {/* Header */}
          <div className="mb-3">
            <div className="flex items-start justify-between gap-3 mb-1">
              <h2 className="text-xl font-bold text-slate-800 leading-tight">
                {name}
              </h2>
              <span className={`shrink-0 text-xs font-semibold px-2.5 py-1 rounded-full ${scoreColor.light} ${scoreColor.text}`}>
                {percentage >= 80 ? "Confiable" : percentage >= 60 ? "Revisar" : "Alerta"}
              </span>
            </div>
            <p className="text-sm text-slate-500">{description}</p>
          </div>

          {/* Info pills */}
          <div className="flex flex-wrap gap-2 mb-4">
            <div className="inline-flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-1">
              <Users className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs font-medium text-slate-700">{party}</span>
            </div>
            <div className="inline-flex items-center gap-1.5 bg-slate-100 rounded-full px-3 py-1">
              <Building2 className="w-3.5 h-3.5 text-slate-500" />
              <span className="text-xs font-medium text-slate-700">{position}</span>
            </div>
          </div>

          {/* Stats row */}
          <div className="flex gap-4 mb-4">
            <div className="flex items-center gap-2">
              {complaints === 0 ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <div>
                <span className={`text-sm font-semibold ${complaints === 0 ? "text-emerald-600" : "text-red-600"}`}>
                  {complaints} Denuncias
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              {lawsuits === 0 ? (
                <CheckCircle2 className="w-5 h-5 text-emerald-500" />
              ) : (
                <XCircle className="w-5 h-5 text-red-500" />
              )}
              <div>
                <span className={`text-sm font-semibold ${lawsuits === 0 ? "text-emerald-600" : "text-red-600"}`}>
                  {lawsuits} Demandas
                </span>
              </div>
            </div>
          </div>

          {/* Button */}
          <div className="mt-auto flex justify-end">
            <button
              onClick={onViewProfile}
              className="bg-slate-800 hover:bg-slate-900 text-white text-sm font-medium px-5 py-2.5 rounded-xl transition-colors flex items-center gap-2 group"
            >
              Ver perfil completo
              <ChevronRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
