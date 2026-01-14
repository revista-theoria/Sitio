import Image from "next/image";
import type { Red } from "../Data/Interfaces";

// Este componente se encarga de redireccionar a una red social al clicar su ícono
export default function IconoRedes({ nombre, enlace }: Red) {
    return (
        <a href={enlace} target="_blank" rel="noopener noreferrer">
            <Image src={`/Assets/${nombre}.svg`} alt={`Logo de ${nombre}`} width={35} height={35} />
        </a>
    );
}
