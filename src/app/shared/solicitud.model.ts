export class SolicitudModel {
    constructor(
      public id_solicitud: string,      // Clave primaria autoincremental que identifica la solicitud.
      public id_mascota: string,        // Referencia a la mascota solicitada.
      public id_cliente: string,        // Referencia al cliente que realiza la solicitud.
      public fecha_solicitud?: string,  // Fecha en que se realizó la solicitud de adopción (opcional).
      public estado: 'Pendiente' | 'Aprobada' | 'Rechazada' = 'Pendiente',  // Estado de la solicitud, por defecto 'Pendiente'.
      public comentarios?: string       // Comentarios adicionales sobre la solicitud (opcional).
    ) {}
}
