import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { ProfileCardVertical } from "@/components//profile-card-vertical"
import { ProfileCardHorizontal } from "@/components/profile-card-horizontal"

import { Separator } from "@/components/ui/separator"
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"


export default function PageDashboard() {
  return (

    <div className="space-y-12">
      {/* Vertical Cards Section */}
      <section>
        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          Tarjetas Verticales
        </h2>
        <div className="flex flex-wrap gap-6">
          {/* High score candidate */}
          <ProfileCardVertical
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
          />
          {/* Medium score candidate */}
          <ProfileCardVertical
            name="María García López"
            percentage={65}
            description="Abogada con experiencia en sector público"
            party="Partido Democrático"
            position="Ex-Ministra de Justicia"
            complaints={2}
            lawsuits={1}
          />
          {/* Low score candidate */}
          <ProfileCardVertical
            name="Carlos Mendoza Ruiz"
            percentage={35}
            description="Empresario del sector construcción"
            party="Alianza Nacional"
            position="Ex-Alcalde de Lima"
            complaints={5}
            lawsuits={3}
          />
        </div>
      </section>

      {/* Horizontal Cards Section */}
      <section>
        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          Tarjetas Horizontales
        </h2>
        <div className="flex flex-col gap-6">
          {/* High score candidate */}
          <ProfileCardHorizontal
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
          />
          {/* Medium score candidate */}
          <ProfileCardHorizontal
            name="María García López"
            percentage={65}
            description="Abogada con experiencia en sector público y defensa de derechos humanos"
            party="Partido Democrático"
            position="Ex-Ministra de Justicia"
            complaints={2}
            lawsuits={1}
          />
        </div>
      </section>
    </div> 
  )
}
