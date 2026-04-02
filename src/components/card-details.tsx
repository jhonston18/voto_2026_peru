

import {
  ShieldCheck,
  Shield,
  ShieldAlert,
  Scale,
  FileWarning,
  Building2,
  Users,
  Clock,
  TrendingUp,
  TrendingDown,
  ExternalLink,
  Calendar,
  MapPin,
} from "lucide-react"
import Boton from "./boton"



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
    <div className="bg-card rounded-[2rem] shadow-xl border border-border overflow-hidden max-w-md group transition-all duration-500 hover:shadow-2xl hover:border-primary/20">

      {/* Header con Gradiente y Glassmorphism */}
      <div className="border-b-[.2px] border-gray-200 p-6 relative overflow-hidden">
        {/* Círculos decorativos de fondo */}
        <div className="absolute -right-4 -top-4 w-24 h-24 bg-white/10 rounded-full blur-2xl" />

        <div className="flex items-start justify-between relative z-10">
          <div className="flex items-center gap-4">
            <div className="w-20 h-20 bg-background/20 backdrop-blur-md rounded-2xl overflow-hidden ring-2 ring-gray-200 shadow-inner">
              {imageUrl ? (
                <img src={imageUrl} alt={name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-[#777] dark:text-white font-black font-heading text-2xl bg-white/10">
                  {name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                </div>
              )}
            </div>
            <div>
              <h2 className="text-black font-black font-heading text-xl leading-tight tracking-tight dark:text-white">{name}</h2>
              <p className="text-[#666] text-xs font-bold uppercase tracking-widest mt-1 dark:text-white/70">{position}</p>
            </div>
          </div>

        </div>
      </div>

      <div className="p-6">
        {/* Panel de Score Central */}
        <div className={`bg-secondary/30 border border-border/50 rounded-2xl p-5 mb-6 flex items-center justify-between group/score transition-colors hover:bg-secondary/50`}>
          <div className="flex items-center gap-4">
            <div className={`p-3 rounded-xl bg-gradient-to-br ${config.gradient || 'from-primary to-primary/80'} shadow-lg shadow-primary/20 group-hover/score:scale-110 transition-transform`}>
              <ScoreIcon className="w-6 h-6 text-white" />
            </div>
            <div>
              <p className={`text-sm font-black uppercase tracking-widest ${config.text}`}>
                {percentage >= 80 ? "Confiable" : percentage >= 60 ? "Revisar" : "Alerta"}
              </p>
              <div className="flex items-center gap-1.5 text-muted-foreground text-[10px] font-bold mt-0.5">
                <Clock className="w-3 h-3" />
                <span>ACTUALIZADO: {lastUpdated}</span>
              </div>
            </div>
          </div>
          <div className="text-right">
            <span className={`text-4xl font-mono font-black tracking-tighter ${config.text}`}>{percentage}</span>
            <span className={`text-lg font-bold ${config.text}`}>%</span>
          </div>
        </div>

        {/* Descripción con estilo de "Cita" */}
        <p className="text-muted-foreground text-sm mb-6 leading-relaxed font-medium italic border-l-2 border-primary/20 pl-4">
          "{description}"
        </p>

        {/* Grid de Información Técnica */}
        <div className="grid grid-cols-2 gap-3 mb-6">
          {[
            { icon: Users, label: "PARTIDO", value: party },
            { icon: Calendar, label: "EXPERIENCIA", value: `${experience} Años` }
          ].map((item, i) => (
            <div key={i} className="bg-secondary/20 border border-border/30 rounded-xl p-3 hover:border-primary/30 transition-colors">
              <div className="flex items-center gap-2 text-muted-foreground/60 mb-1">
                <item.icon className="w-3.5 h-3.5" />
                <span className="text-[9px] font-black tracking-widest">{item.label}</span>
              </div>
              <p className="text-sm font-bold text-foreground truncate uppercase dark:text-white">{item.value}</p>
            </div>
          ))}
        </div>

        {/* Sección Legal / Antecedentes */}
        <div className="flex gap-4 mb-6">
          <div className={`flex-1 rounded-2xl p-4 border transition-all ${complaints === 0 ? "bg-emerald-500/5 border-emerald-500/10" : "bg-red-500/5 border-red-500/10"}`}>
            <div className="flex items-center gap-2 mb-2">
              <FileWarning className={`w-4 h-4 ${complaints === 0 ? "text-emerald-500" : "text-red-500"}`} />
              <span className={`text-[10px] font-black tracking-tighter uppercase ${complaints === 0 ? "text-emerald-600" : "text-red-600"}`}>Denuncias</span>
            </div>
            <p className={`text-3xl font-mono font-black ${complaints === 0 ? "text-emerald-600" : "text-red-600"}`}>{complaints}</p>
          </div>

          <div className={`flex-1 rounded-2xl p-4 border transition-all ${lawsuits === 0 ? "bg-emerald-500/5 border-emerald-500/10" : "bg-red-500/5 border-red-500/10"}`}>
            <div className="flex items-center gap-2 mb-2">
              <Scale className={`w-4 h-4 ${lawsuits === 0 ? "text-emerald-500" : "text-red-500"}`} />
              <span className={`text-[10px] font-black tracking-tighter uppercase ${lawsuits === 0 ? "text-emerald-600" : "text-red-600"}`}>Procesos</span>
            </div>
            <p className={`text-3xl font-mono font-black ${lawsuits === 0 ? "text-emerald-600" : "text-red-600"}`}>{lawsuits}</p>
          </div>
        </div>

        {/* Botón Call-to-Action */}
        <div className="group/btn">
          <Boton />
        </div>
      </div>
    </div>
  )
}
