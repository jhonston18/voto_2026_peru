
import {
  AudioWaveform,
  BookOpen,
  Bot,
  Command,
  Crown,
  BotMessageSquare,
  Gavel,
  ChessKing,
  Map,
  PieChart,
  Scale,
  House,
  ChessQueen,
  ShieldHalf,
  Cuboid,
  BookUser,
  Shapes,
  Boxes,
  ChessRook,
  Diameter,
} from "lucide-react"


// This is sample data.

export const dataUser = {
    user: {
    name: "shadcn",
    email: "m@example.com",
    avatar: "https://thumbs.dreamstime.com/b/icono-plano-de-perfil-avatar-predeterminado-vector-usuario-medios-sociales-retrato-una-imagen-humana-desconocida-un-desconocido-184330869.jpg",
  }
    
}





export const datos = {
  navMain: [
    {
      title: "Inicio",
      url: "/dashboard",
      icon: House,
    },
    {
      title: "ChatBot",
      url: "/dashboard/chatbot",
      icon: BotMessageSquare,
    },
  ],
  generales: [
    {
      title: "Generales",
      isActive: true,
      cargos: [
        {
          title: "Presidentes",
          url: "/dashboard/presidentes",
          icon: Crown
        },
        {
          title: "Vicepresidentes",
          url: "/dashboard/vicepresidentes",
          icon: ChessKing
        },
        {
          title: "Senadores",
          url: "/dashboard/senadores",
          icon: Gavel
        },
        {
          title: "Diputados",
          url: "/dashboard/diputados",
          icon: Scale
        },
      ],
    }
  ],
  regionales: [
    {
      title: "Regionales",
      isActive: true,
      cargos: [
        {
          title: "Gobernador Regional",
          url: "/dashboard/gobernadores-regionales",
          icon: ChessQueen
        },
        {
          title: "Vicegobernador Regional",
          url: "/dashboard/vicegobernadores-regionales",
          icon: ShieldHalf
        },
        {
          title: "Consejeros Regionales",
          url: "/dashboard/consejeros-regionales",
          icon: BookUser 
        }
      ],
    }
  ],
  municipales: [
    {
      title: "Municipales",
      isActive: true,
      cargos: [
        {
          title: "Alcaldes Provinciales",
          url: "/dashboard/alcaldes-provinciales",
          icon: Shapes
        },
        {
          title: "Regidores Provinciales",
          url: "/dashboard/regidores-provinciales",
          icon: Boxes
        },
        {
          title: "Alcaldes Distritales",
          url: "/dashboard/alcaldes-distritales",
          icon: ChessRook
        },
        {
          title: "Regidores Distritales",
          url: "/dashboard/regidores-distritales",
          icon: Diameter
        }
      ],
    }
  ],
  parlamentoAndino: [
    {
      title: "Parlamento Andino",
      isActive: true,
      cargos: [
        {
          title: "Parlamento Andino",
          url: "/dashboard/alcaldes-provinciales",
          icon: Shapes
        }
      ],
    }
  ],
}


