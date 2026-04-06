


import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"

import { ShieldCheck, Shield, ShieldAlert, FileWarning, Scale, Users, Building2, MapPin, Calendar, Clock, ExternalLink } from "lucide-react";

export function getScoreConfig(percentage: number) {
  if (percentage >= 80) return {
    label: "Candidato Confiable",
    variant: "emerald",
    bg: "bg-emerald-500",
    text: "text-emerald-500",
    light: "bg-emerald-500/10",
    gradient: "from-emerald-600 to-emerald-900",
    icon: ShieldCheck
  };
  if (percentage >= 60) return {
    label: "Bajo Revisión",
    variant: "amber",
    bg: "bg-amber-500",
    text: "text-amber-500",
    light: "bg-amber-500/10",
    gradient: "from-amber-500 to-orange-700",
    icon: Shield
  };
  return {
    label: "Alerta Crítica",
    variant: "red",
    bg: "bg-red-500",
    text: "text-red-500",
    light: "bg-red-500/10",
    gradient: "from-red-600 to-red-900",
    icon: ShieldAlert
  };
}

export { FileWarning, Scale, Users, Building2, MapPin, Calendar, Clock, ExternalLink };

// Tipado para los datos del candidato
interface CandidatePageProps {
  params: { id: string };
}



function getScoreColor(percentage: number) {
  // Caso: CONFIABLE (Verde)
  if (percentage >= 80) return {
    bg: "bg-emerald-500",
    text: "text-emerald-500",
    light: "bg-emerald-50 dark:bg-emerald-500/10",
    gradient: "from-emerald-600 to-emerald-900",
    ring: "ring-emerald-200"
  }

  // Caso: REVISAR (Ámbar/Naranja)
  if (percentage >= 60) return {
    bg: "bg-amber-500",
    text: "text-amber-500",
    light: "bg-amber-50 dark:bg-amber-500/10",
    gradient: "from-amber-500 to-orange-700",
    ring: "ring-amber-200"
  }

  // Caso: ALERTA (Rojo)
  return {
    bg: "bg-red-500",
    text: "text-red-500",
    light: "bg-red-50 dark:bg-red-500/10",
    gradient: "from-red-600 to-red-900",
    ring: "ring-red-200"
  }

  // Icono de escudo con exclamación (Alerta)
}

function getScoreIcon(percentage: number) {
  if (percentage >= 80) return ShieldCheck // Icono con un check (Confiable)
  if (percentage >= 60) return Shield      // Icono de escudo normal (Revisar)
  return ShieldAlert

}


export default function CandidateInfoPage() {


  // Aquí simularías el fetch de datos: const candidate = await db.candidate.findUnique(...)
  const data = {
    name: "Victor Alejandro Ramirez Vazquez",
    percentage: 94,
    position: "Senador de la República",
    party: "Fuerza Popular",
    region: "Lambayeque",
    experience: 15,
    description: "Economista con maestría en gestión pública y amplia trayectoria en el sector financiero estatal.",
    imageUrl: null,
    complaints: 0,
    lawsuits: 1,
    verified: true,
  };

  const config = getScoreConfig(data.percentage);
  const ScoreIcon = config.icon;
  
  // Ejemplo con un porcentaje del 50%
  const scoreColor = getScoreColor(50); // Ejemplo con un porcentaje del 50%
  const imageUrl = "https://fuerzapopular.com.pe/wp-content/uploads/2024/02/congresista-fp-16.webp"
  const complaints = 3;
  const lawsuits = 1;


  return (

   <main className="flex-1 bg-background min-h-screen pb-20 custom-scrollbar">
      
      {/* HEADER HERO SECTION */}
      <section className={`relative w-full py-16 px-6 bg-gradient-to-br ${config.gradient} overflow-hidden rounded-xl`}>
        <div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 pointer-events-none">
          <ScoreIcon className="w-96 h-96 text-white" />
        </div>

        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center md:items-end gap-8 relative z-10">
          {/* Avatar */}
          <div className="w-48 h-48 rounded-[2.5rem] bg-background/20 backdrop-blur-xl border-4 border-white/30 shadow-2xl overflow-hidden shrink-0">
            {data.imageUrl ? (
              <img src={data.imageUrl} className="w-full h-full object-cover" alt={data.name} />
            ) : (
              <div className="w-full h-full flex items-center justify-center bg-white/10 text-white text-5xl font-black">{data.name[0]}</div>
            )}
          </div>
          
          {/* Info Principal */}
          <div className="flex-1 text-center md:text-left space-y-4">
            <div className="space-y-1">
              <h1 className="text-4xl md:text-5xl font-black font-heading text-white tracking-tighter leading-none">
                {data.name}
              </h1>
              <p className="text-white/80 font-bold uppercase tracking-[0.3em] text-[10px] mt-2">
                {data.position} • {data.party}
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center md:justify-start gap-3">
              <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest uppercase">
                {data.region}
              </span>
              {data.verified && (
                <span className="bg-emerald-500/20 backdrop-blur-md border border-white/20 text-white text-[10px] font-black px-4 py-2 rounded-xl uppercase tracking-widest flex items-center gap-2">
                  <ShieldCheck className="w-3 h-3" /> Verificado
                </span>
              )}
            </div>
          </div>

          {/* Score Widget */}
          <div className="bg-white/10 backdrop-blur-2xl border border-white/20 p-8 rounded-[2.5rem] text-center min-w-[180px] shadow-2xl">
            <p className="text-white/60 text-[10px] font-black uppercase tracking-tighter mb-1">Confianza</p>
            <div className="flex items-center justify-center gap-1">
              <span className="text-6xl font-mono font-black text-white tracking-tighter">{data.percentage}</span>
              <span className="text-2xl font-bold text-white/70">%</span>
            </div>
          </div>
        </div>
      </section>

      {/* DASHBOARD DE ANTECEDENTES */}
      <section className="max-w-6xl mx-auto px-6 -mt-10 relative z-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {/* Denuncias */}
        <div className="bg-card border border-border p-6 rounded-[2rem] shadow-xl flex items-center justify-between group hover:border-primary/20 transition-all">
          <div>
            <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest text-muted-foreground block mb-2">Denuncias</span>
            <p className={`text-4xl font-mono font-black ${data.complaints > 0 ? 'text-red-500' : 'text-emerald-500'}`}>{data.complaints}</p>
          </div>
          <FileWarning className={`w-8 h-8 ${data.complaints > 0 ? 'text-red-500/20' : 'text-emerald-500/20'}`} />
        </div>

        {/* Procesos */}
        <div className="bg-card border border-border p-6 rounded-[2rem] shadow-xl flex items-center justify-between group hover:border-primary/20 transition-all">
          <div>
            <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest text-muted-foreground block mb-2">Procesos</span>
            <p className={`text-4xl font-mono font-black ${data.lawsuits > 0 ? 'text-red-500' : 'text-emerald-500'}`}>{data.lawsuits}</p>
          </div>
          <Scale className={`w-8 h-8 ${data.lawsuits > 0 ? 'text-red-500/20' : 'text-emerald-500/20'}`} />
        </div>

        {/* Info Grid 1 */}
        <div className="bg-card border border-border p-6 rounded-[2rem] shadow-xl">
          <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest text-muted-foreground block mb-2">Experiencia</span>
          <p className="text-xl font-bold text-red-500">{data.experience} Años</p>
        </div>

        {/* Info Grid 2 */}
        <div className="bg-card border border-border p-6 rounded-[2rem] shadow-xl">
          <span className="text-[10px] text-blue-600 font-black uppercase tracking-widest text-muted-foreground block mb-2">Estado</span>
          <p className={`text-xl font-bold ${config.text}`}>{config.label}</p>
        </div>
      </section>

      <div className="px-6 py-12">
          <h3 className="text-xs text-blue-600 font-black uppercase tracking-[0.2em] border-b border-primary/20 pb-2 inline-block">Descripcion con IA</h3>
          <p className="text-sm leading-relaxed text-muted-foreground font-medium italic border-l-4 border-primary/10 pl-4 mt-2">El postula tiene una amplia experiencia en el sector público y privado, con un historial de desempeño 
            destacado en diversas áreas de la administración. el candidato a tenido multiples procesos legales. que le han
            perjudicado en su carrera politica, uno de ello es maltrato familiar, denucia por pension de alimento</p>
        </div>

      {/* DETALLES Y LISTADO */}
      <section className="max-w-6xl mx-auto px-6 py-12 grid grid-cols-1 lg:grid-cols-3 gap-12">
        
        {/* Columna Izquierda: Perfil */}
        <div className="lg:col-span-1 space-y-8">
          <div className="space-y-4">
            <h3 className="text-xs text-blue-600 font-black uppercase tracking-[0.2em] border-b border-primary/20 pb-2 inline-block">Resumen Profesional</h3>
            <p className="text-sm leading-relaxed text-muted-foreground font-medium italic border-l-4 border-primary/10 pl-4">
              "{data.description}"
            </p>
          </div>

          <div className="space-y-4">
             <h3 className="text-xs text-blue-600 font-black uppercase tracking-[0.2em]">Información Oficial</h3>
             <div className="space-y-3">
               {[
                 { icon: Users, label: "Partido", value: data.party },
                 { icon: MapPin, label: "Región", value: data.region },
                 { icon: Building2, label: "Cargo", value: data.position }
               ].map((item, i) => (
                 <div key={i} className="flex items-center gap-3 bg-secondary/20 p-3 rounded-xl border border-border/30">
                    <item.icon className="w-4 h-4 text-muted-foreground" />
                    <div>
                      <p className="text-[9px] font-black text-muted-foreground/60 leading-none">{item.label}</p>
                      <p className="text-xs font-bold text-foreground dark:text-white">{item.value}</p>
                    </div>
                 </div>
               ))}
             </div>
          </div>
        </div>

        {/* Columna Derecha: Listado de Incidencias */}
        <div className="lg:col-span-2 space-y-6">
          <div className="flex items-center justify-between">
             <h3 className="text-2xl text-blue-600 font-black font-heading tracking-tight">Registro de Incidencias Legales</h3>
             <div className="flex items-center gap-2 text-[10px] font-bold text-muted-foreground">
               <Clock className="w-3 h-3" /> ACTUALIZADO 2026
             </div>
          </div>

          {/* Listado tipo Expediente */}
          <div className="space-y-4">
            {[1, 2].map((item) => (
              <div key={item} className="group bg-card border border-border/60 hover:border-primary/30 p-6 rounded-[2.5rem] transition-all duration-300 hover:shadow-lg">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                  <div className="flex-1 space-y-3">
                    <div className="flex items-center gap-3">
                      <span className="bg-red-500/10 text-red-600 text-[9px] font-black px-2 py-1 rounded uppercase tracking-tighter border border-red-500/20">
                        Proceso Judicial
                      </span>
                      <span className="text-muted-foreground text-[10px] font-mono">EXP-00452-2024-JR-PE</span>
                    </div>
                    <h4 className="text-lg font-bold text-foreground">Delitos contra la Administración Pública</h4>
                    <p className="text-sm text-muted-foreground/70 leading-relaxed italic">
                      Investigación preparatoria por presunta colusión agravada en licitaciones de infraestructura durante su gestión anterior.
                    </p>
                  </div>
                  
                  <a href="#" className="inline-flex items-center gap-2 bg-secondary/50 hover:bg-blue-600 hover:text-white text-[10px] font-black text-black uppercase tracking-widest px-6 py-4 rounded-2xl transition-all border border-border/50">
                    Expediente <ExternalLink className="w-3 h-3" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>



  )
}
