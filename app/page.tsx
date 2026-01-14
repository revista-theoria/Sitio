import Image from "next/image";
import Link from "next/link";
import Numero from "../Componentes/Numero";
import { numeroActual, convocatoriaActiva } from "../Data/Numeros";
import { informacionPresentacion, infoPresentacionVisible } from "../Data/ConstantesAdicionales";

/*
Este componente representa la página de inicio. Muestra el número más reciente, la convocatoria activa o la información
de la próxima presentación, e información general sobre la revista
*/
export default function Home() {
  return (
    <main>
      {/* Número más reciente */}
      <section className="bg-[#081824] flex flex-col md:flex-row items-center justify-center gap-16 md:gap-36 px-20 py-10">
          <div className="flex flex-col gap-10 md:gap-15 items-center">
              <h3 className="uppercase text-white text-center md:text-left text-2xl md:text-3xl font-semibold">
                Número más reciente
              </h3>

            <Link
              href={`/visualizar/${numeroActual.edicion}`}
              className="bg-white flex flex-row text-black px-5 py-3 gap-4 rounded-full text-sm font-medium hover:bg-gray-200 transition"
            >
              Conoce más
              <Image src="/Assets/ConoceMas.svg" alt="ícono de conocer más" width={20} height={20} />
            </Link>
          </div>

          <Numero edicion={numeroActual.edicion} fechaPublicacion={numeroActual.fechaPublicacion} />
      </section>

      {/* Convocatoria activa */}
      {convocatoriaActiva && (
          <section className="bg-black flex flex-col items-center justify-center py-10">
            <Image src="/Assets/Convocatoria.png" alt="Convocatoria activa" width={400} height={400} />
          </section>
        )}

      {/* Próxima presentación. Agregar negación en la línea de abajo */}
      {convocatoriaActiva && infoPresentacionVisible && (
          <section className="bg-[#4C0027] text-white flex flex-col gap-4 items-center mx-auto px-10 py-15">
            <h3 className="text-2xl font-semibold">¡Te invitamos a la presentación de nuestro nuevo número!</h3>

            <div className="flex flex-col gap-4 mt-12 max-w-220">
              <p>
                {informacionPresentacion}
              </p>
            </div>
          </section>
        )}

      {/* Información sobre Theoria */}
      <section className="bg-[#3E5641] text-white flex flex-col items-center mx-auto px-10 py-15">
          <h3 className="text-2xl font-semibold">Sobre nosotros</h3>

          <div className="flex flex-col gap-4 mt-12 max-w-220">
            <p>
              Somos una revista independiente que busca ofrecer un espacio accesible y seguro a artistas que desean dar a conocer su trabajo. Buscamos que el proceso de edición y publicación sea sencillo y transparente, sin la necesidad de aportaciones monetarias ni cesión de derechos, y recibimos obras de diversa índole, desde ilustración y fotografía hasta poesía y narrativa corta. Nuesto objetivo es fomentar la creatividad y la expresión artística en Guadalajara y Zapopan.
            </p>
            <p>
              Acompañamos la publicación de cada número con una presentación donde los colaboradores pueden compartir sus obras entre ellos y con el público asistente.
            </p>
          </div>
      </section> 
    </main>
  );
}
