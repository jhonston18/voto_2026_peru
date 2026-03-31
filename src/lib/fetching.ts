
import { create } from "domain";
import prisma from "../lib/db/prisma";

// export async function getCandidatesByCargoSlug(slug: string) {
//   return await prisma.candidato.findMany({
//     where: {
//       cargo: {
//         slug: slug, // Buscamos por "presidente", "senador", etc.
//       },
//     },
//     select: {
//       id: true,
//       nombres: true,
//       apellidos: true,
//       partido: true,
//       aiScore: true,
//       fotoUrl: true,
//       cargo: {
//         select: { nombre: true }
//       },
//       // AQUÍ ESTÁ LA MAGIA: Solo pedimos el conteo, no los datos
//       _count: {
//         select: { antecedentes: true }
//       }
//     },
//     orderBy: {
//       aiScore: 'desc'
//     },
//     take: 20 // Paginación inicial
//   });
// }


// export async function createCadidates(){
  
//   const newCandidate = await prisma.candidato.create({
//     data: {
//       nombre: "Juan",
//       apellido: "Perez",
//       partido: "Partido Ejemplo",
//       cargo: {
//         connect: { slug: "presidente" } // Asumiendo que el cargo ya existe
//       },
//       aiScore: 75,
//       fotoUrl: "https://fuerzapopular.com.pe/wp-content/uploads/2024/02/congresista-fp-01.webp",
//     }
//   })

//   console.log("Nuevo candidato creado:", newCandidate);
// }


export async function createCargos(){

  try{
    const newCargo = await prisma.cargo.createMany({
    data: [
      {
        nombre: "Presidentes",
        slug: "presidentes"
      },
      {
        nombre: "Vicepresidentes",
        slug: "vicepresidentes"
      },
      {
        nombre: "Senadores",
        slug: "senadores"
      },
      {
        nombre: "Diputados",
        slug: "diputados"
      },
      {
        nombre: "Gobernadores Regionales",
        slug: "gobernadores-regionales"
      },
      {
        nombre: "Vicegobernadores Regionales",
        slug: "vicegobernadores-regionales"
      },
      {
        nombre: "Consejeros Regionales",
        slug: "consejeros-regionales"
      },
      {
        nombre: "Alcaldes Provinciales",
        slug: "alcaldes-provinciales"
      },
      {
        nombre: "Regidores Provinciales",
        slug: "regidores-provinciales"
      },
      {
        nombre: "Alcaldes Regionales",
        slug: "alcaldes-regionales"
      }
    ],
    skipDuplicates: true,
  })

  console.log("Cargos creados o ya existentes:", newCargo);

  }catch(error){
    console.error("Error al crear cargos: ", error);
  }


}

createCargos().then(() => {
  console.log("Proceso de creación de cargos finalizado.");
}).catch((error) => {
  console.error("Error en el proceso de creación de cargos: ", error); 
})