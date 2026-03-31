import { create } from "domain";
import { createCargos } from "@/lib/fetching"


export default function Cargo({ params }: { params: { cargo: string } }) {

    const { cargo } = params;

    const cargoLimpio = cargo.replace(/-/g, ' ').toLocaleLowerCase();

    


    return (
        <div>
            <h1>{cargoLimpio}</h1>
        </div>
    )
}