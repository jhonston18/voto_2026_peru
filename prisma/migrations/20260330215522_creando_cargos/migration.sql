-- CreateTable
CREATE TABLE "Candidato" (
    "id" SERIAL NOT NULL,
    "dni" INTEGER NOT NULL,
    "nombres" TEXT NOT NULL,
    "apellidos" TEXT NOT NULL,
    "partido" TEXT NOT NULL,
    "aiScore" INTEGER NOT NULL DEFAULT 0,
    "fotoUrl" TEXT NOT NULL,
    "directUrl" TEXT NOT NULL,
    "cargoId" INTEGER NOT NULL,

    CONSTRAINT "Candidato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Antecedente" (
    "id" SERIAL NOT NULL,
    "tipo" TEXT NOT NULL,
    "descripcion" TEXT NOT NULL,
    "candidatoId" INTEGER NOT NULL,

    CONSTRAINT "Antecedente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partido" (
    "id" SERIAL NOT NULL,
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Partido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Profesion" (
    "id" SERIAL NOT NULL,
    "profesion" TEXT NOT NULL,

    CONSTRAINT "Profesion_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalisisIA" (
    "id" SERIAL NOT NULL,
    "candidatoId" INTEGER NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "resumen" TEXT NOT NULL,
    "confianza" TEXT NOT NULL,
    "fuentesUsadas" TEXT[],
    "ultimaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalisisIA_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Candidato_dni_key" ON "Candidato"("dni");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_nombre_key" ON "Cargo"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_slug_key" ON "Cargo"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "AnalisisIA_candidatoId_key" ON "AnalisisIA"("candidatoId");

-- AddForeignKey
ALTER TABLE "Candidato" ADD CONSTRAINT "Candidato_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Antecedente" ADD CONSTRAINT "Antecedente_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "Candidato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalisisIA" ADD CONSTRAINT "AnalisisIA_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "Candidato"("id") ON DELETE CASCADE ON UPDATE CASCADE;
