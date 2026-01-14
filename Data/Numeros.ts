import type { Numero } from "./Interfaces";

/*
Mientras la convocatoria esté activa, no se muestra información relacionada a la presentación de ese número.
Cuando se muestre esta información, la convocatoria ya habrá cerrado, por lo que se oculta de la página principal
*/
export const convocatoriaActiva = true;

// Arreglo que contiene la información relevante de los números de la revista
export const numeros: Numero[] = [
    {
        edicion: 1,
        fechaPublicacion: {
            anio: 2025,
            mes: 6
        }
    }
]

// Cada que se publique un número, deberá actualizarse el índice del arreglo 'numeros' sumándole 1
export const numeroActual = numeros[0];
