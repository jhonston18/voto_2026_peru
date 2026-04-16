CREATE EXTENSION IF NOT EXISTS vector;

-- CreateEnum
CREATE TYPE "DocumentType" AS ENUM ('PENAL', 'POLICIAL', 'PLAN_DE_GOBIERNO', 'HOJA_DE_VIDA', 'OTROS');

-- CreateEnum
CREATE TYPE "Confianza" AS ENUM ('ALTA', 'MEDIA', 'BAJA');

-- CreateTable
CREATE TABLE "Candidato" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombres" TEXT NOT NULL,
    "apellidoPaterno" TEXT NOT NULL,
    "apellidoMaterno" TEXT NOT NULL,
    "aiScore" INTEGER NOT NULL DEFAULT 0,
    "fotoUrl" TEXT NOT NULL,
    "cargoId" UUID NOT NULL,
    "idPartido" TEXT NOT NULL,

    CONSTRAINT "Candidato_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Antecedente" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "tipo" "DocumentType" NOT NULL,
    "descripcion" TEXT NOT NULL,
    "candidatoId" UUID NOT NULL,

    CONSTRAINT "Antecedente_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Cargo" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,
    "slug" TEXT NOT NULL,

    CONSTRAINT "Cargo_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Partido" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "nombre" TEXT NOT NULL,

    CONSTRAINT "Partido_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "AnalisisIA" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "candidatoId" UUID NOT NULL,
    "score" INTEGER NOT NULL DEFAULT 0,
    "resumen" TEXT NOT NULL,
    "confianza" "Confianza" NOT NULL,
    "fuentesUsadas" TEXT[],
    "ultimaActualizacion" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "AnalisisIA_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Documents" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "type" "DocumentType" NOT NULL,
    "content" TEXT NOT NULL,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "candidateId" UUID NOT NULL,

    CONSTRAINT "Documents_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "DocumentChunks" (
    "id" UUID NOT NULL DEFAULT gen_random_uuid(),
    "content" TEXT NOT NULL,
    "embedding" vector(1536),
    "documentId" UUID NOT NULL,

    CONSTRAINT "DocumentChunks_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_nombre_key" ON "Cargo"("nombre");

-- CreateIndex
CREATE UNIQUE INDEX "Cargo_slug_key" ON "Cargo"("slug");

-- CreateIndex
CREATE UNIQUE INDEX "AnalisisIA_candidatoId_key" ON "AnalisisIA"("candidatoId");

-- AddForeignKey
ALTER TABLE "Candidato" ADD CONSTRAINT "Candidato_cargoId_fkey" FOREIGN KEY ("cargoId") REFERENCES "Cargo"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Candidato" ADD CONSTRAINT "Candidato_idPartido_fkey" FOREIGN KEY ("idPartido") REFERENCES "Partido"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Antecedente" ADD CONSTRAINT "Antecedente_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "Candidato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "AnalisisIA" ADD CONSTRAINT "AnalisisIA_candidatoId_fkey" FOREIGN KEY ("candidatoId") REFERENCES "Candidato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Documents" ADD CONSTRAINT "Documents_candidateId_fkey" FOREIGN KEY ("candidateId") REFERENCES "Candidato"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "DocumentChunks" ADD CONSTRAINT "DocumentChunks_documentId_fkey" FOREIGN KEY ("documentId") REFERENCES "Documents"("id") ON DELETE CASCADE ON UPDATE CASCADE;
