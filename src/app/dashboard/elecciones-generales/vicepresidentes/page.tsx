

import { ProfileCardHorizontal } from "@/components/profile-card-horizontal"

export default function Vicepresidentes() {
  return (
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
  );
}