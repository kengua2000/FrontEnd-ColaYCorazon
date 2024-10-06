export class ClienteModel {
    constructor(
      public id_cliente: string,      // Clave primaria autoincremental para identificar al cliente
      public nombre: string,          // Cadena de hasta 100 caracteres que representa el nombre del cliente
      public apellido: string,        // Cadena de hasta 100 caracteres que representa el apellido del cliente
      public direccion?: string,      // Cadena de hasta 255 caracteres que representa la dirección del cliente (opcional)
      public telefono?: string,       // Cadena de hasta 20 caracteres que representa el teléfono del cliente (opcional)
      public email?: string,          // Cadena de hasta 100 caracteres que representa el correo electrónico del cliente (opcional)
    ) {}
}
