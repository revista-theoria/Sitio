"use client";
import { useParams } from "next/navigation";
import { Document, Page, pdfjs } from "react-pdf";
import { useEffect, useRef, useState } from "react";
import { notFound } from "next/navigation";
import Cargando from "../../../Componentes/Cargando";
import BarraHerramientasPDF from "../../../Componentes/BarraHerramientasPDF";

pdfjs.GlobalWorkerOptions.workerSrc = `https://unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

export default function Visualizar() {
    const { id } = useParams();
    const rutaNumero = `/Numeros/${id}.pdf`;

    // Si se intenta acceder a un número que no existe, se redirige a la pantalla de 404
    const [existe, setExiste] = useState<boolean | null>(null);

    useEffect(() => {
        fetch(rutaNumero, { method: "HEAD" }).then((res) => {
            if (!res.ok) setExiste(false);
            else setExiste(true);
        })
        .catch(() => setExiste(false));
    }, [rutaNumero]);

    if (existe === false) {
        notFound();
    }

    const [numPaginas, setNumPaginas] = useState<number | null>(null);
    const [zoom, setZoom] = useState(1);
    const contenedorRef = useRef<HTMLDivElement>(null);
    const [ancho, setAncho] = useState<number | null>(null);

    // Para controlar el zoom que se le hace al PDF
    useEffect(() => {
        const actualizarAncho = () => {
            if (contenedorRef.current) {
            setAncho(contenedorRef.current.offsetWidth);
            }
        };

        actualizarAncho();
        window.addEventListener("resize", actualizarAncho);

        return () => window.removeEventListener("resize", actualizarAncho);
    }, []);

    // Evitar que se aplique mucho zoom en computadoras
    const [esDesktop, setEsDesktop] = useState(false);

    useEffect(() => {
        const actualizar = () => setEsDesktop(window.innerWidth >= 768);
        actualizar();
        window.addEventListener("resize", actualizar);
        return () => window.removeEventListener("resize", actualizar);
    }, []);

    return (
        <main className="relative bg-neutral-800 min-h-screen text-white">
            <BarraHerramientasPDF rutaNumero={rutaNumero} setZoom={setZoom} />

            <div ref={contenedorRef} className="w-full max-w-5xl px-2 md:px-0 mx-auto">
                {/* Visor */}
                <Document file={rutaNumero} onLoadSuccess={({ numPages }) => setNumPaginas(numPages)}
                    loading={<Cargando tipo="número" color="white" />} className="flex flex-col items-center gap-10"
                >
                    {Array.from(new Array(numPaginas), (_, index) => (
                        <div key={index} className="shadow-2xl">
                            <Page pageNumber={index + 1} scale={esDesktop ? zoom : 1} width={!esDesktop ? ancho ?? undefined : undefined}
                                className="bg-white" renderTextLayer={false} renderAnnotationLayer={false}
                            />
                        </div>
                    ))}
                </Document>
            </div>
        </main>
    );
}
