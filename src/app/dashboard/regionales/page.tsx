

import { ProfileCardDetailed } from "@/components/card-details"
import { ProfileCardStats } from "@/components/card-stats"

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