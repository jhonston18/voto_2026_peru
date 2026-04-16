
import { create } from "domain";
import prisma from "./db/prisma.ts";

export async function createPartidos() {

  const partidos = [
    { nombre: "AHORA NACION - AN", url: "https://votoinformado.jne.gob.pe/LogoOp/2980.jpg" },
    { nombre: "ALIANZA ELECTORAL VENCEREMOS", url: "https://votoinformado.jne.gob.pe/LogoOp/3025.jpg" },
    { nombre: "ALIANZA PARA EL PROGRESO", url: "https://votoinformado.jne.gob.pe/LogoOp/1257.jpg" },
    { nombre: "AVANZA PAIS - PARTIDO DE INTEGRACION SOCIAL", url: "https://votoinformado.jne.gob.pe/LogoOp/2173.jpg" },
    { nombre: "FE EN EL PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/2898.jpg" },
    { nombre: "FRENTE POPULAR AGRICOLA FIA DEL PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/2901.jpg" },
    { nombre: "FUERZA POPULAR", url: "https://votoinformado.jne.gob.pe/LogoOp/1366.jpg" },
    { nombre: "FUERZA Y LIBERTAD", url: "https://votoinformado.jne.gob.pe/LogoOp/3024.jpg" },
    { nombre: "JUNTOS POR EL PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/1264.jpg" },
    { nombre: "LIBERTAD POPULAR", url: "https://votoinformado.jne.gob.pe/LogoOp/2933.jpg" },
    { nombre: "PARTIDO APRISTA PERUANO", url: "https://votoinformado.jne.gob.pe/LogoOp/2930.jpg" },
    { nombre: "PARTIDO CIVICO OBRAS", url: "https://votoinformado.jne.gob.pe/LogoOp/2941.jpg" },
    { nombre: "PARTIDO DE LOS TRABAJADORES Y EMPRENDEDORES PTE - PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/2939.jpg" },
    { nombre: "PARTIDO DEL BUEN GOBIERNO", url: "https://votoinformado.jne.gob.pe/LogoOp/2961.jpg" },
    { nombre: "PARTIDO DEMOCRATA UNIDO PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/2867.jpg" },
    { nombre: "PARTIDO DEMOCRATA VERDE", url: "https://votoinformado.jne.gob.pe/LogoOp/2895.jpg" },
    { nombre: "PARTIDO DEMOCRATICO FEDERAL", url: "https://votoinformado.jne.gob.pe/LogoOp/2986.jpg" },
    { nombre: "PARTIDO DEMOCRATICO SOMOS PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/14.jpg" },
    { nombre: "PARTIDO FRENTE DE LA ESPERANZA 2021", url: "https://votoinformado.jne.gob.pe/LogoOp/2857.jpg" },
    { nombre: "PARTIDO MORADO", url: "https://votoinformado.jne.gob.pe/LogoOp/2840.jpg" },
    { nombre: "PARTIDO PAIS PARA TODOS", url: "https://votoinformado.jne.gob.pe/LogoOp/2956.jpg" },
    { nombre: "PARTIDO PATRIOTICO DEL PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/2869.jpg" },
    { nombre: "PARTIDO POLITICO COOPERACION POPULAR", url: "https://votoinformado.jne.gob.pe/LogoOp/2995.jpg" },
    { nombre: "PARTIDO POLITICO INTEGRIDAD DEMOCRATICA", url: "https://votoinformado.jne.gob.pe/LogoOp/2985.jpg" },
    { nombre: "PARTIDO POLITICO NACIONAL PERU LIBRE", url: "https://votoinformado.jne.gob.pe/LogoOp/2218.jpg" },
    { nombre: "PARTIDO POLITICO PERU ACCION", url: "https://votoinformado.jne.gob.pe/LogoOp/2932.jpg" },
    { nombre: "PARTIDO POLITICO PERU PRIMERO", url: "https://votoinformado.jne.gob.pe/LogoOp/2925.jpg" },
    { nombre: "PARTIDO POLITICO PRIN", url: "https://votoinformado.jne.gob.pe/LogoOp/2921.jpg" },
    { nombre: "PARTIDO SICREO", url: "https://votoinformado.jne.gob.pe/LogoOp/2935.jpg" },
    { nombre: "PERU MODERNO", url: "https://votoinformado.jne.gob.pe/LogoOp/2924.jpg" },
    { nombre: "PODEMOS PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/2731.jpg" },
    { nombre: "PRIMERO LA GENTE - COMUNIDAD, ECOLOGIA, LIBERTAD Y PROGRESO", url: "https://votoinformado.jne.gob.pe/LogoOp/2931.jpg" },
    { nombre: "PROGRESEMOS", url: "https://votoinformado.jne.gob.pe/LogoOp/2967.jpg" },
    { nombre: "RENOVACION POPULAR", url: "https://votoinformado.jne.gob.pe/LogoOp/22.jpg" },
    { nombre: "SALVEMOS AL PERU", url: "https://votoinformado.jne.gob.pe/LogoOp/2927.jpg" },
    { nombre: "UN CAMINO DIFERENTE", url: "https://votoinformado.jne.gob.pe/LogoOp/2998.jpg" },
    { nombre: "UNIDAD NACIONAL", url: "https://votoinformado.jne.gob.pe/LogoOp/3023.jpg" }
  ];

  try {
    const newPartidos = await prisma.partido.createMany({
      data: partidos,
      skipDuplicates: true,
    })

    console.log("partidos creados o ya existentes:", newPartidos);

  } catch (error) {
    console.error("Error al crear cargos: ", error);
  }


}




export async function createCargos() {

  const cargos = [
    { nombre: "Presidentes", slug: "elecciones-generales" },
    { nombre: "Vicepresidente", slug: "elecciones-generales" },
    { nombre: "Senadores", slug: "elecciones-generales" },
    { nombre: "Diputados", slug: "elecciones-generales" },
    { nombre: "Gobernador Regional", slug: "elecciones-regionales" },
    { nombre: "Vicegobernador Regional", slug: "elecciones-regionales" },
    { nombre: "Consejeros Regionales", slug: "elecciones-regionales" },
    { nombre: "Alcaldes Provinciales", slug: "elecciones-municipales" },
    { nombre: "Regidores Provinciales", slug: "elecciones-municipales" },
    { nombre: "Alcaldes Distritales", slug: "elecciones-municipales" },
    { nombre: "Regidores Distritales", slug: "elecciones-municipales" },
    { nombre: "Parlamento Andino", slug: "parlamento-andino" }
  ]

  try {
    const newCargos = await prisma.cargo.createMany({
      data: cargos,
      skipDuplicates: true
    })

    console.log("Partidos creados o ya existentes: ", newCargos)
  }catch(error){
    console.log("Error al crear los cargos: ", error)
  }

}

createPartidos().then(() => {
  console.log("Proceso de creación de partidos finalizado.");
}).catch((error) => {
  console.error("Error en el proceso de creación de partidos: ", error);
})


// createCargos().then(() => {
//   console.log("Cargos creados exitosamente.")
// }).catch((error) => {
//   console.log("Error en el proceso de creacion de Cargos: ", error)
// })