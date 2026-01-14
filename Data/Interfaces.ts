// Para cada número de la revista
export interface Numero {
    edicion: number,
    fechaPublicacion: {
        anio: number,
        mes: number
    }
};

// Para cada red social en el footer
export interface Red {
    nombre: string,
    enlace: string
}

// Para crear un formulario
export interface Formulario {
    enlace: string,
    titulo: string
}

// Para los enlaces de navegación en el encabezado
export interface EnlaceNavegacion {
    nombre: string,
    ruta: string,
    onClick?: () =>  void       // Parámetro opcional para manejar clicks. Actualmente sólo se utiliza para cerrar la barra lateral en la vista de teléfonos
}

// Para el círculo de carga
export interface CirculoCarga {
    tipo: string,
    color: string       // Este parámetro sirve para establecer color para el círculo, dependiendo del fondo sobre el que va a mostrarse
}

// Para los botones que se muestran en la barra de herramientas en la página 'visualizacion/:id'
export interface OpcionesVisualizacion {
    rutaNumero: string,
    setZoom: React.Dispatch<React.SetStateAction<number>>      // Para los botones de aumentar y disminuir zoom
}
