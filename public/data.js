
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Frame,
  GalleryVerticalEnd,
  Map,
  PieChart,
  Settings2,
  SquareTerminal,
} from "lucide-react"

// This is sample data.

export const dataUser = {
    user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://thumbs.dreamstime.com/b/icono-plano-de-perfil-avatar-predeterminado-vector-usuario-medios-sociales-retrato-una-imagen-humana-desconocida-un-desconocido-184330869.jpg",
  }
    
}


export const dataSideBar = {
  teams: [
    {
      name: "Acme Inc",
      logo: GalleryVerticalEnd,
      plan: "Enterprise",
    },
    {
      name: "Acme Corp.",
      logo: AudioWaveform,
      plan: "Startup",
    },
    {
      name: "Evil Corp.",
      logo: Command,
      plan: "Free",
    },
  ],
  navMain: [
    {
      title: "Playground",
      url: "#",
      icon: SquareTerminal,
      isActive: true,
      items: [
        {
          title: "History",
          url: "#",
        },
        {
          title: "Starred",
          url: "#",
        },
        {
          title: "Settings",
          url: "#",
        },
      ],
    },
    {
      title: "Models",
      url: "#",
      icon: Bot,
      items: [
        {
          title: "Genesis",
          url: "#",
        },
        {
          title: "Explorer",
          url: "#",
        },
        {
          title: "Quantum",
          url: "#",
        },
      ],
    },
    {
      title: "Documentation",
      url: "#",
      icon: BookOpen,
      items: [
        {
          title: "Introduction",
          url: "#",
        },
        {
          title: "Get Started",
          url: "#",
        },
        {
          title: "Tutorials",
          url: "#",
        },
        {
          title: "Changelog",
          url: "#",
        },
      ],
    },
    {
      title: "Settings",
      url: "#",
      icon: Settings2,
      items: [
        {
          title: "General",
          url: "#",
        },
        {
          title: "Team",
          url: "#",
        },
        {
          title: "Billing",
          url: "#",
        },
        {
          title: "Limits",
          url: "#",
        },
      ],
    },
  ],
  projects: [
    {
      name: "Design Engineering",
      url: "/dashboard/perfiles",
      icon: Frame,
    },
    {
      name: "Sales & Marketing",
      url: "/dashboard/perfiles",
      icon: PieChart,
    },
    {
      name: "Travel",
      url: "/dashboard/perfiles",
      icon: Map,
    },
  ],
}


export const datos = {
  generales: [
    {
      title: "Generales",
      icon: SquareTerminal,
      isActive: true,
      cargos: [
        {
          title: "Presidentes",
          url: "/dashboard/elecciones-generales/presidentes",
        },
        {
          title: "Vicepresidentes",
          url: "/dashboard/elecciones-generales/vicepresidentes",
        },
        {
          title: "Senadores",
          url: "/dashboard/elecciones-generales/senadores",
        },
        {
          title: "Diputados",
          url: "/dashboard/elecciones-generales/diputados",
        },
      ],
    }
  ],
  regionales: [
    {
      title: "Regionales",
      icon: SquareTerminal,
      isActive: true,
      cargos: [
        {
          title: "Gobernador Regional",
          url: "/dashboard/gobernadores-regionales",
        },
        {
          title: "Vicegobernador Regional",
          url: "/dashboard/vicegobernadores-regionales",
        },
        {
          title: "Consejeros Regionales",
          url: "/dashboard/consejeros-regionales",
        }
      ],
    }
  ],
  municipales: [
    {
      title: "Municipales",
      icon: SquareTerminal,
      isActive: true,
      cargos: [
        {
          title: "Alcaldes Provinciales",
          url: "/dashboard/alcaldes-provinciales",
        },
        {
          title: "Regidores Provinciales",
          url: "/dashboard/regidores-provinciales",
        },
        {
          title: "Alcaldes Distritales",
          url: "/dashboard/alcaldes-distritales",
        },
        {
          title: "Regidores Distritales",
          url: "/dashboard/regidores-distritales",
        }
      ],
    }
  ],
}


