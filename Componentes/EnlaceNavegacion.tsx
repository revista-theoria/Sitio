import Link from "next/link";
import type { EnlaceNavegacion } from "../Data/Interfaces";

export default function EnlaceNavegacion({ nombre, ruta, onClick }: EnlaceNavegacion ) {
    return (
        <li className="text-white">
            <Link href={ruta} onClick={onClick}
                className="relative inline-block px-1 after:content-[''] after:absolute after:left-1/2
                    after:bottom-0 after:h-[1px] after:w-0 after:bg-white after:transition-all after:duration-300 after:ease-out
                    hover:after:left-0 hover:after:w-full"
            >
                {nombre}
            </Link>
        </li>
    );
}
