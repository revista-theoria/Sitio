import Numero from "../../Componentes/Numero";
import { numeros } from "../../Data/Numeros";

// Histórico de todos los números publicados
export default function Archivo() {
    return (
        <main className="bg-gray-800 text-white flex flex-col items-center px-10 py-15 gap-10">
            <section className="max-w-6xl w-full">
                <h3 className="mb-8 text-3xl">Archivo</h3>
                <p>Haz clic sobre un número para conocer más</p>
            </section>

            <section className="grid grid-cols-1 lg:grid-cols-[repeat(auto-fit,minmax(18rem,1fr))] gap-12
                justify-items-center pt-10 max-w-6xl mx-auto"
            >
                {numeros.map((numero) => (
                    <Numero key={numero.edicion} edicion={numero.edicion} fechaPublicacion={numero.fechaPublicacion} />
                ))}
            </section>
        </main>
    );
}
