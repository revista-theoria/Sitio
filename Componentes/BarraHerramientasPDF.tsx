import Image from "next/image";
import type { OpcionesVisualizacion } from "../Data/Interfaces";

export default function BarraHerramientasPDF({ rutaNumero, setZoom }: OpcionesVisualizacion) {
  return (
    <div className="bg-neutral-900 px-5 md:px-20 py-5 relative flex items-center">
        {/* Controles de zoom (sólo se muestran en computadoras, centrados) */}
        <div className="hidden md:flex absolute left-1/2 -translate-x-1/2 bg-neutral-900/90 backdrop-blur items-center gap-2 px-4 py-3 rounded">
            <button onClick={() => setZoom(z => Math.min(z + 0.1, 1.6))}
            className="text-white text-xl px-3 py-1 hover:bg-white/10 rounded transition"
            >
            +
            </button>

            <button onClick={() => setZoom(z => Math.max(z - 0.1, 0.8))}
                className="text-white text-xl px-3 py-1 hover:bg-white/10 rounded transition"
            >
            −
            </button>
        </div>

        {/* Botón de descargar */}
        <div className="ml-auto">
            <a href={rutaNumero} download
            className="bg-white text-black px-5 py-3 rounded-full text-sm font-medium shadow-lg hover:bg-gray-200 transition flex
                items-center gap-4"
            >
                <span className="hidden md:block">Descargar</span>
                <Image src="/Assets/Descargar.svg" alt="Ícono de descargar" width={20} height={20} />
            </a>
        </div>
    </div>
  );
}
