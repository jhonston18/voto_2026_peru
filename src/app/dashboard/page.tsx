

import { AppSidebar } from "@/components/sidebar/app-sidebar";
import { ProfileCardVertical } from "@/components//profile-card-vertical";
import { ProfileCardHorizontal } from "@/components/profile-card-horizontal";
import { ProfileCardDetailed } from "@/components/card-details";

import { Separator } from "@/components/ui/separator";


export default function PageDashboard() {
  return (
    <div className="space-y-12 ">
      <div>
        <label className="text-2xl font-black text-blue-600 ">Inicio</label>
        <p className="text-black dark:text-white">Esta es la seccion de inicio donde veras a todos los candidatos</p>
      </div>

      {/* Horizontal Cards Section */}
      <section>
        <h2 className="text-xl font-black text-[#777] mb-4">
          PRESIDENTES
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        <h2 className="text-xl font-black text-[#777] dark:text-blue mb-4">
          VICEPRESIDENTES
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          Diputados (Modo Oscuro)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
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
          Gobernador Regional (Modo Oscuro)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> {/* Cambio a 3 columnas en pantallas grandes */}
          {/* High score candidate */}
          <ProfileCardVertical
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
            
          />
          {/* Medium score candidate */}
          <ProfileCardVertical
            name="María García López"
            percentage={65}
            description="Abogada con experiencia en sector público y defensa de derechos humanos"
            party="Partido Democrático"
            position="Ex-Ministra de Justicia"
            complaints={2}
            lawsuits={1}
          />

          <ProfileCardVertical
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
          />
          {/* Medium score candidate */}
          <ProfileCardVertical
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
          Alcaldes Provinciales (Modo Oscuro)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> {/* Cambio a 3 columnas en pantallas grandes */}
          {/* High score candidate */}
          <ProfileCardDetailed
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
            
          />
          {/* Medium score candidate */}
          <ProfileCardDetailed
            name="María García López"
            percentage={65}
            description="Abogada con experiencia en sector público y defensa de derechos humanos"
            party="Partido Democrático"
            position="Ex-Ministra de Justicia"
            complaints={2}
            lawsuits={1}
          />

          <ProfileCardDetailed
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
          />
          {/* Medium score candidate */}
          <ProfileCardDetailed
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
          Regidores Provinciales (Modo Oscuro)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> {/* Cambio a 3 columnas en pantallas grandes */}
          {/* High score candidate */}
          <ProfileCardDetailed
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
            
          />
          {/* Medium score candidate */}
          <ProfileCardDetailed
            name="María García López"
            percentage={65}
            description="Abogada con experiencia en sector público y defensa de derechos humanos"
            party="Partido Democrático"
            position="Ex-Ministra de Justicia"
            complaints={2}
            lawsuits={1}
          />

          <ProfileCardDetailed
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
          />
          {/* Medium score candidate */}
          <ProfileCardDetailed
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
          Alcaldes Distritales (Modo Oscuro)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> {/* Cambio a 3 columnas en pantallas grandes */}
          {/* High score candidate */}
          <ProfileCardDetailed
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
            
          />
          {/* Medium score candidate */}
          <ProfileCardDetailed
            name="María García López"
            percentage={65}
            description="Abogada con experiencia en sector público y defensa de derechos humanos"
            party="Partido Democrático"
            position="Ex-Ministra de Justicia"
            complaints={2}
            lawsuits={1}
          />

          <ProfileCardDetailed
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
          />
          {/* Medium score candidate */}
          <ProfileCardDetailed
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
          Regidores Provinciales (Modo Oscuro)
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6"> {/* Cambio a 3 columnas en pantallas grandes */}
          {/* High score candidate */}
          <ProfileCardDetailed
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
            
          />
          {/* Medium score candidate */}
          <ProfileCardDetailed
            name="María García López"
            percentage={65}
            description="Abogada con experiencia en sector público y defensa de derechos humanos"
            party="Partido Democrático"
            position="Ex-Ministra de Justicia"
            complaints={2}
            lawsuits={1}
          />

          <ProfileCardDetailed
            name="Victor Alejandro Ramirez Vazquez"
            percentage={94}
            description="Economista reconocido a nivel nacional e internacional con más de 20 años de experiencia"
            party="Fuerza Popular"
            position="Ex-Gerente General de Alicorp"
            complaints={0}
            lawsuits={0}
          />
          {/* Medium score candidate */}
          <ProfileCardDetailed
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
  );
}
