

import {
  ShieldCheck,
  Shield,
  ShieldAlert,
  Scale,
  FileWarning,
  Building2,
  Users,
  Award,
  TrendingUp,
  TrendingDown,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react"

interface ProfileCardDetailedProps {
  name: string
  percentage: number
  description: string
  party: string
  position: string
  imageUrl?: string
  complaints: number
  lawsuits: number
  experience?: number
  region?: string
  lastUpdated?: string
  verified?: boolean
  onViewProfile?: () => void
}

function getScoreConfig(percentage: number) {
  if (percentage >= 80) return { 
    icon: ShieldCheck, 
    gradient: "from-emerald-500 to-teal-600",
    text: "text-emerald-600",
    bg: "bg-emerald-50",
    label: "Candidato Confiable",
    trend: TrendingUp
  }
  if (percentage >= 60) return { 
    icon: Shield, 
    gradient: "from-amber-500 to-orange-500",
    text: "text-amber-600",
    bg: "bg-amber-50",
    label: "Requiere Revisión",
    trend: TrendingDown
  }
  return { 
    icon: ShieldAlert, 
    gradient: "from-red-500 to-rose-600",
    text: "text-red-600",
    bg: "bg-red-50",
    label: "Alto Riesgo",
    trend: TrendingDown
  }
}

export function ProfileCardDetailed({
  name,
  percentage,
  description,
  party,
  position,
  imageUrl,
  complaints,
  lawsuits,
  experience = 10,
  region = "Nacional",
  lastUpdated = "Marzo 2026",
  verified = true,
  onViewProfile,
}: ProfileCardDetailedProps) {
  const config = getScoreConfig(percentage)
  const ScoreIcon = config.icon
  const TrendIcon = config.trend

  return (
    <div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-100 overflow-hidden max-w-md">
      {/* Header gradient */}
      <div className={`bg-gradient-to-r ${config.gradient} p-5`}>
        <div className="flex items-start justify-between">
          <div className="flex items-center gap-3">
            <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-xl overflow-hidden ring-2 ring-white/30">
              {imageUrl ? (
                <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-white font-bold text-xl">
                  {name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-white font-bold text-lg leading-tight">{name}</h2>
              <p className="text-white/80 text-sm">{position}</p>
            </div>
          </div>
          {verified && (
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-2 py-1 flex items-center gap-1">
              <Award className="w-3 h-3 text-white" />
              <span className="text-white text-xs font-medium">Verificado</span>
            </div>
          )}
        </div>
      </div>

      <div className="p-5">
        {/* Score section */}
        <div className={`${config.bg} rounded-xl p-4 mb-4 flex items-center justify-between`}>
          <div className="flex items-center gap-3">
            <div className={`p-2 rounded-lg bg-gradient-to-br ${config.gradient}`}>
              <ScoreIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`${config.text} font-semibold`}>{config.label}</p>
              <div className="flex items-center gap-1 text-slate-500 text-xs">
                <TrendIcon className="w-3 h-3" />
                <span>Actualizado {lastUpdated}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-4xl font-bold ${config.text}`}>{percentage}</span>
            <span className={`text-lg ${config.text}`}>%</span>
          </div>
        </div>

        {/* Description */}
        <p className="text-slate-600 text-sm mb-4 leading-relaxed">{description}</p>

        {/* Info grid */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <Users className="w-4 h-4" />
              <span className="text-xs">Partido</span>
            </div>
            <p className="text-sm font-medium text-slate-800 truncate">{party}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <Calendar className="w-4 h-4" />
              <span className="text-xs">Experiencia</span>
            </div>
            <p className="text-sm font-medium text-slate-800">{experience} años</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <MapPin className="w-4 h-4" />
              <span className="text-xs">Región</span>
            </div>
            <p className="text-sm font-medium text-slate-800">{region}</p>
          </div>
          <div className="bg-slate-50 rounded-lg p-3">
            <div className="flex items-center gap-2 text-slate-500 mb-1">
              <Building2 className="w-4 h-4" />
              <span className="text-xs">Cargo</span>
            </div>
            <p className="text-sm font-medium text-slate-800 truncate">{position}</p>
          </div>
        </div>

        {/* Complaints & Lawsuits */}
        <div className="flex gap-3 mb-5">
          <div className={`flex-1 rounded-xl p-3 ${complaints === 0 ? "bg-emerald-50 border border-emerald-100" : "bg-red-50 border border-red-100"}`}>
            <FileWarning className={`w-5 h-5 mb-2 ${complaints === 0 ? "text-emerald-600" : "text-red-600"}`} />
            <p className={`text-2xl font-bold ${complaints === 0 ? "text-emerald-700" : "text-red-700"}`}>{complaints}</p>
            <p className={`text-xs ${complaints === 0 ? "text-emerald-600" : "text-red-600"}`}>Denuncias activas</p>
          </div>
          <div className={`flex-1 rounded-xl p-3 ${lawsuits === 0 ? "bg-emerald-50 border border-emerald-100" : "bg-red-50 border border-red-100"}`}>
            <Scale className={`w-5 h-5 mb-2 ${lawsuits === 0 ? "text-emerald-600" : "text-red-600"}`} />
            <p className={`text-2xl font-bold ${lawsuits === 0 ? "text-emerald-700" : "text-red-700"}`}>{lawsuits}</p>
            <p className={`text-xs ${lawsuits === 0 ? "text-emerald-600" : "text-red-600"}`}>Procesos judiciales</p>
          </div>
        </div>

        {/* Button */}
        <button
          onClick={onViewProfile}
          className={`w-full bg-gradient-to-r ${config.gradient} text-white font-semibold px-4 py-3 rounded-xl transition-all hover:shadow-lg flex items-center justify-center gap-2`}
        >
          Ver perfil completo
          <ExternalLink className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
