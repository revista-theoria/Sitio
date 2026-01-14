"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import EnlaceNavegacion from "./EnlaceNavegacion";

/*
El encabezado consta de dos partes: una barra de navegación con todas las páginas del sitio
y el logo de la revista, que redirige a la página principal al ser clicado
*/
export default function Encabezado() {
    const [menuAbierto, setMenuAbierto] = useState(false);

    return (
        <header className="bg-black px-10 py-15">
            <nav className="flex flex-col items-center md:flex-row md:justify-between gap-30">
                {/* Botón de menú hamburguesa para teléfonos. Aquí se mostrarán los enlaces de navegación */}
                <button className="fixed top-8 left-6 z-[60] text-white text-3xl md:hidden"
                    onClick={() => setMenuAbierto(!menuAbierto)} aria-label="Menú"
                >
                    {menuAbierto ? "×" : "☰"}
                </button>

                {/* Overlay para cerrar el menú cuando se hace clic fuera de él */}
                {menuAbierto && (
                    <div className="fixed inset-0 z-40 md:hidden" onClick={() => setMenuAbierto(false)} />
                )}

                {/* Logo de la revista */}
                <Link href="/" className="flex justify-center">
                    <Image src="/Assets/Logo.png" alt="Logo de Theoria" width={500} height={500} />
                </Link>
            
                {/* Enlaces de navegación */}
                <ul className={`fixed top-0 left-0 z-50 h-full w-72 bg-black text-white flex flex-col gap-6 pt-40 px-8
                    transform transition-transform duration-300
                    ${menuAbierto ? "translate-x-0" : "-translate-x-full"}

                    md:static md:z-auto md:h-auto md:w-auto md:flex-row md:translate-x-0 md:gap-10 md:p-0 md:bg-transparent`}
                >
                    {/*<EnlaceNavegacion nombre="Archivo" ruta="/archivo" onClick={() => setMenuAbierto(false)} />*/}
                    <EnlaceNavegacion nombre="Lineamientos de publicación" ruta="/lineamientos-de-publicacion" onClick={() => setMenuAbierto(false)} />
                    <EnlaceNavegacion nombre="Contacto y envío de propuestas" ruta="/contacto-y-envio-de-propuestas" onClick={() => setMenuAbierto(false)} />
                </ul>
            </nav>
        </header>
    );
}
