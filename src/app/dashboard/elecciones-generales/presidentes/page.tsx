

import { ProfileCardVertical } from "@/components/profile-card-vertical"
import { Breadcrumb, BreadcrumbItem } from "@/components/ui/breadcrumb"

export default function Perfiles() {

    return (
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
    )
}