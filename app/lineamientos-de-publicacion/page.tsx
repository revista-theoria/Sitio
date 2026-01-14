import Link from "next/link";

// Información general sobre las pautas a seguir para la publicación de obras en la revista
export default function LineamientosPublicacion() {
    return (
        <main className="bg-neutral-200 py-15 leading-loose">
            <section className="max-w-4xl mx-auto px-6 space-y-4">
                <p>
                    Con cada nueva convocatoria compartiremos, a modo de detonador, un breve párrafo que pueda ayudar a aquellos que necesiten inspiración para crear una obra. Seguirlo es completamente opcional y esto no influirá en el proceso de selección de los trabajos. El detonador de la edición de verano de 2026, <i>Ecos</i>, fue el siguiente:
                </p>
                <p className="text-[14px]">
                    Cada obra es, de algún modo, un retrato inconsciente del pasado propio y ajeno, de aquel elemento que habita en las cosas breves. Aquellas frases que no se extinguen al pronunciarse, sino que quedan suspendidas en la memoria, como una botella perdida en el mar, viajando en olas suaves. Estos retratos retribuyen al mundo un pequeño fragmento del autor, una respuesta que se transforma en llamado mediante palabras, gestos, colores y sensaciones: huellas vivas que, pacientes y solidarias, nos permiten ocupar un lugar en nuestra propia realidad. Un mismo universo, un mismo mensaje que se expande, se transforma y se diluye cada vez que alcanza a otra persona, en cualquier tiempo.
                </p>
            </section>

            <section className="max-w-4xl mx-auto px-6 mt-12 space-y-4">
                <p>
                    A continuación, los puntos más relevantes a considerar antes de presentarnos una obra:
                </p>
                <ol className="list-decimal list-outside pl-10 space-y-2">
                    <li> Puede colaborar cualquier persona, sin distinción. </li>
                    <li> Los autores conservan los derechos de sus obras. </li>
                    <li> Es indispensable enviar firmada la Carta de Autorización de Publicación, que podrá descargarse al final del formulario de envío de colaboraciones (en la página <Link href="/contacto-y-envio-de-propuestas"><span className="underline">Contacto y envío de propuestas</span></Link>). </li>
                    <li> Las obras seleccionadas podrán ser publicadas en la revista digital, en la física o en ambas. </li>
                    <li> Una misma persona podrá enviar varias obras, ya sea del mismo tipo o de distintos. </li>
                    <li> Las obras que no sean seleccionadas podrán considerarse para futuras ediciones. </li>
                    <li> Cada autor podrá decidir si desea firmar con su nombre real, con un seudónimo o permanecer anónimo. </li>
                    <li> Solicitamos que los archivos enviados sean originales. (No PDF) </li>
                </ol>
            </section>
        </main>
    );
}