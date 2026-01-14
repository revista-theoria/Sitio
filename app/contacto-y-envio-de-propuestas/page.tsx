import Link from "next/link";
import Formulario from "../../Componentes/Formulario";
import { formularioActivo } from "../../Data/ConstantesAdicionales";

export default function EnvioPropuestas() {
    return (
        <main className="bg-neutral-200 flex flex-col items-center leading-loose py-15 gap-12">
            <section className="px-6 max-w-4xl w-full">
                <p>
                    Agradecemos tu interés en contactarnos. A través del siguiente formulario podrás hacernos llegar alguna obra que te interese publicar con nosotros. Asegúrate de revisar los <Link href="/lineamientos-de-publicacion"> <span className="underline">lineamientos de publicación</span> </Link> antes de compartirnos cualquier propuesta.
                </p>
                <br />
                <p>
                    Si deseas hacernos una pregunta o un comentario relacionado con estos lineamientos, los espacios publicitarios en los números de la revista, o algún otro asunto, puedes hacerlo mediante nuestras redes sociales o escribiéndonos a re.theoria@gmail.com.
                </p>
            </section>

            <section className="w-full">
                <Formulario
                    enlace={formularioActivo} 
                    titulo="Formulario de envío de propuestas"
                />
            </section>
        </main>
    );
}
