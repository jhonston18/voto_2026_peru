import { create } from "domain";
import { createCargos } from "@/lib/fetching"


export default async function Cargo({ params }: { params: { cargo: string } }) {

    const { cargo } = await params;

    // const cargoLimpio = cargo.replace(/-/g, ' ').toLocaleLowerCase();

    

    if(cargo == "presidentes"){
        return <h1>Pagina de Presidentes</h1>
    }
    if(cargo == "vicepresidentes"){
        return <h1>Pagina de Vicepresidentes</h1>
    }
    if(cargo == "senadores"){
        return <h1>Pagina de Senadores</h1>
    }
    if(cargo == "diputados"){
        return <h1>Pagina de Diputados</h1>
    }


    return (
        <div>
            <h1>{cargo}</h1>
        </div>
    )
}