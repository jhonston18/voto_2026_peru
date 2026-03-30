

import {
    ShieldCheck,
    Shield,
    ShieldAlert,
    Scale,
    FileWarning,
    Briefcase,
    GraduationCap,
    Flag,
    CircleDot,
    ArrowRight,
} from "lucide-react"

interface ProfileCardStatsProps {
    name: string
    percentage: number
    party: string
    position: string
    imageUrl?: string
    complaints: number
    lawsuits: number
    yearsInPolitics?: number
    education?: string
    onViewProfile?: () => void
}

function getScoreConfig(percentage: number) {
    if (percentage >= 80) return {
        icon: ShieldCheck,
        gradient: "from-emerald-400 to-emerald-600",
        glow: "shadow-emerald-500/25",
        label: "Excelente"
    }
    if (percentage >= 60) return {
        icon: Shield,
        gradient: "from-amber-400 to-amber-600",
        glow: "shadow-amber-500/25",
        label: "Regular"
    }
    return {
        icon: ShieldAlert,
        gradient: "from-red-400 to-red-600",
        glow: "shadow-red-500/25",
        label: "Deficiente"
    }
}

export function ProfileCardStats({
    name,
    percentage,
    party,
    position,
    imageUrl,
    complaints,
    lawsuits,
    yearsInPolitics = 8,
    education = "Universidad Nacional",
    onViewProfile,
}: ProfileCardStatsProps) {
    const config = getScoreConfig(percentage)
    const Icon = config.icon

    const stats = [
        { icon: FileWarning, label: "Denuncias", value: complaints, danger: complaints > 0 },
        { icon: Scale, label: "Demandas", value: lawsuits, danger: lawsuits > 0 },
        { icon: Briefcase, label: "Años política", value: yearsInPolitics, danger: false },
    ]

    return (
        <div className="bg-slate-900 rounded-2xl overflow-hidden w-80">
            {/* Header */}
            <div className="relative p-5 pb-16">
                <div className="absolute inset-0 bg-gradient-to-br from-slate-800 to-slate-900" />
                <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${config.gradient} rounded-full blur-3xl opacity-20`} />

                <div className="relative flex items-start gap-4">
                    <div className="w-14 h-14 bg-slate-700 rounded-xl overflow-hidden ring-2 ring-slate-600">
                        {imageUrl ? (
                            <img src={imageUrl} alt={name} className="w-full h-full object-cover" />
                        ) : (
                            <div className="w-full h-full flex items-center justify-center text-slate-400 font-bold">
                                {name.split(" ").map(n => n[0]).slice(0, 2).join("")}
                            </div>
                        )}
                    </div>
                    <div className="flex-1 min-w-0">
                        <h3 className="text-white font-bold truncate">{name}</h3>
                        <p className="text-slate-400 text-sm truncate">{position}</p>
                        <div className="flex items-center gap-1.5 mt-2">
                            <Flag className="w-3 h-3 text-slate-500" />
                            <span className="text-slate-500 text-xs">{party}</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Score circle - overlapping */}
            <div className="relative px-5">
                <div className={`absolute -top-10 right-5 w-20 h-20 bg-gradient-to-br ${config.gradient} rounded-2xl shadow-xl ${config.glow} flex flex-col items-center justify-center`}>
                    <Icon className="w-5 h-5 text-white mb-0.5" />
                    <span className="text-white text-2xl font-bold">{percentage}</span>
                    <span className="text-white/80 text-[10px]">{config.label}</span>
                </div>
            </div>

            {/* Stats */}
            <div className="px-5 pb-5">
                <div className="space-y-3 mb-5">
                    {stats.map((stat, i) => (
                        <div key={i} className="flex items-center justify-between">
                            <div className="flex items-center gap-3">
                                <div className={`p-2 rounded-lg ${stat.danger ? "bg-red-500/10" : "bg-slate-800"}`}>
                                    <stat.icon className={`w-4 h-4 ${stat.danger ? "text-red-400" : "text-slate-400"}`} />
                                </div>
                                <span className="text-slate-400 text-sm">{stat.label}</span>
                            </div>
                            <span className={`font-bold ${stat.danger ? "text-red-400" : "text-white"}`}>
                                {stat.value}
                            </span>
                        </div>
                    ))}
                </div>

                {/* Education */}
                <div className="bg-slate-800/50 rounded-xl p-3 mb-4 flex items-center gap-3">
                    <GraduationCap className="w-5 h-5 text-slate-500" />
                    <div>
                        <p className="text-slate-500 text-xs">Educación</p>
                        <p className="text-slate-300 text-sm truncate">{education}</p>
                    </div>
                </div>

                {/* Button */}
                <button
                    onClick={onViewProfile}
                    className={`w-full bg-gradient-to-r ${config.gradient} text-white font-semibold px-4 py-3 rounded-xl transition-all hover:shadow-lg ${config.glow} flex items-center justify-center gap-2 group`}
                >
                    Ver detalles
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </button>
            </div>
        </div>
    )
}
