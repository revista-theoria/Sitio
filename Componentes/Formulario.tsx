"use client";

import { useState } from "react";
import type { Formulario } from "../Data/Interfaces";
import Cargando from "./Cargando";

export default function Formulario({ enlace, titulo }: Formulario) {
    const [cargando, setCargando] = useState(true);

    return (
        <section className="w-full">
            {/* Se reserva el espacio para el formulario para que el ícono de 'cargando' se vea centrado */}
            <div className="relative w-full h-[calc(100vh-350px)]">
                {/* Para cuando el formulario está cargando */}
                {cargando && <Cargando tipo="formulario" color="gray-600" />}

                {/* Formulario */}
                <iframe
                    title={titulo}
                    src={enlace}
                    onLoad={() => setCargando(false)}
                    className={`w-full h-full border-0 ${ cargando ? "opacity-0" : "opacity-100" }`}
                />
            </div>
        </section>
    );
}
