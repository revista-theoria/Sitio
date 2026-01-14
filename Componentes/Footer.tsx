import Image from "next/image";
import IconoRedes from "./IconoRedes";
import { redes } from "../Data/Redes";

/*
El footer consta de dos partes: una sección con los íconos de redes sociales (para encontrarlas se utiliza
el arreglo 'redes', donde cada objeto de este es relacionado con una imagen y un enlace), y otra
con un párrafo de texto (el contenido aún está por definirse)
*/
export default function Footer() {
    return (
        <footer className="bg-black text-white p-10 flex flex-col md:flex-row justify-between items-center gap-10">
            <div className="">
                <p>Contáctanos</p>
                <nav className="flex flew-row gap-4 mt-4 md:mt-8">
                    {redes.map((red) => (
                        <IconoRedes key={red.nombre} nombre={red.nombre} enlace={red.enlace} />
                    ))}
                </nav>
            </div>

            <div className="max-w-80 text-center text-sm">
                <p>
                    Las opiniones expresadas en artículos, ensayos o cualquier otro contenido son de exclusiva responsabilidad de sus autores, y no representan necesariamente los valores del equipo editorial.
                </p>
            </div>

            <Image src="/Assets/Estrella.png" alt="Logo de Theoria" width={100} height={100} />
        </footer>
    );
}