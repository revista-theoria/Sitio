import Image from "next/image";
import Link from "next/link";
import type { Numero } from "../Data/Interfaces";

// Este componente se encarga de redirigir a la página de visualización de un número al clicar su portada
export default function Numero({ edicion, fechaPublicacion }: Numero) {
    return (
        <article className="w-full max-w-sm">
            <Link href={`/visualizar/${edicion}`}>
                <Image src={`/Portadas/${edicion}.png`} alt={`Portada del número ${edicion}`} width={400} height={400} />
            </Link>
        </article>
    );
}
