import { AppSidebar } from "@/components/sidebar/app-sidebar"
import { ProfileCardVertical } from "@/components//profile-card-vertical"
import { ProfileCardHorizontal } from "@/components/profile-card-horizontal"
import { ProfileCardDetailed } from "@/components/card-details"
import { ProfileCardStats } from "@/components/card-stats"

import { Separator } from "@/components/ui/separator"




export default function PageDashboard() {
  return (

    <div className="space-y-12">
      <div className="text-black">
        <label className="text-2xl text-bold">Inicio</label>
        <p>Esta es la seccion de inicio donde veras a todos los candidatos</p>
      </div>

      {/* Horizontal Cards Section */}
      <section >
        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          Presidentes
        </h2>
        <div className="grid grid-cols-2 gap-6">
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

      <section>
        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          Senadores (Modo Oscuro)
        </h2>
        <div className="flex flex-wrap gap-6">
          <ProfileCardStats
            name="Fernando Castillo Reyes"
            percentage={85}
            party="Acción Democrática"
            position="Ex-Ministro de Economía"
            complaints={0}
            lawsuits={0}
            yearsInPolitics={12}
            education="Harvard Business School"
          />
          <ProfileCardStats
            name="Sandra Morales Vílchez"
            percentage={58}
            party="Unión por el Perú"
            position="Ex-Gobernadora Regional"
            complaints={2}
            lawsuits={1}
            yearsInPolitics={8}
            education="Universidad de Lima"
          />
          <ProfileCardStats
            name="Sandra Morales Vílchez"
            percentage={58}
            party="Unión por el Perú"
            position="Ex-Gobernadora Regional"
            complaints={2}
            lawsuits={1}
            yearsInPolitics={8}
            education="Universidad de Lima"
          />
          <ProfileCardStats
            name="Sandra Morales Vílchez"
            percentage={58}
            party="Unión por el Perú"
            position="Ex-Gobernadora Regional"
            complaints={2}
            lawsuits={1}
            yearsInPolitics={8}
            education="Universidad de Lima"
          />
          <ProfileCardStats
            name="Sandra Morales Vílchez"
            percentage={58}
            party="Unión por el Perú"
            position="Ex-Gobernadora Regional"
            complaints={2}
            lawsuits={1}
            yearsInPolitics={8}
            education="Universidad de Lima"
          />
          <ProfileCardStats
            name="Sandra Morales Vílchez"
            percentage={58}
            party="Unión por el Perú"
            position="Ex-Gobernadora Regional"
            complaints={2}
            lawsuits={1}
            yearsInPolitics={8}
            education="Universidad de Lima"
          />
        </div>
      </section>

      <section>
        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          Regionales
        </h2>
        <div className="flex flex-wrap gap-6">
          <ProfileCardDetailed
            name="Lucía Esperanza Torres"
            percentage={91}
            description="Economista con más de 15 años de experiencia en políticas públicas. Reconocida por su trabajo en transparencia gubernamental y lucha contra la corrupción."
            party="Frente Amplio"
            position="Ex-Directora del BCR"
            complaints={0}
            lawsuits={0}
            experience={15}
            region="Lima"
            verified={true}
          />
          <ProfileCardDetailed
            name="Miguel Ángel Vega"
            percentage={48}
            description="Empresario del sector inmobiliario. Múltiples cuestionamientos por conflictos de interés y casos pendientes en el poder judicial."
            party="Fuerza Renovadora"
            position="Ex-Alcalde Provincial"
            complaints={4}
            lawsuits={2}
            experience={6}
            region="Arequipa"
            verified={false}
          />
          <ProfileCardDetailed
            name="Lucía Esperanza Torres"
            percentage={91}
            description="Economista con más de 15 años de experiencia en políticas públicas. Reconocida por su trabajo en transparencia gubernamental y lucha contra la corrupción."
            party="Frente Amplio"
            position="Ex-Directora del BCR"
            complaints={0}
            lawsuits={0}
            experience={15}
            region="Lima"
            verified={true}
          />
          <ProfileCardDetailed
            name="Miguel Ángel Vega"
            percentage={48}
            description="Empresario del sector inmobiliario. Múltiples cuestionamientos por conflictos de interés y casos pendientes en el poder judicial."
            party="Fuerza Renovadora"
            position="Ex-Alcalde Provincial"
            complaints={4}
            lawsuits={2}
            experience={6}
            region="Arequipa"
            verified={false}
          />
        </div>
      </section>


      <section>
        <h2 className="text-lg font-semibold text-slate-700 mb-4">
          Vicepresidentes
        </h2>
        <div className="flex justify-between flex-wrap gap-6">
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
          <ProfileCardVertical
            name="María García López"
            percentage={65}
            description="Abogada con experiencia en sector público"
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
