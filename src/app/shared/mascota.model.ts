export class MascotaModel {
    constructor(
      public id_mascota: string,       // ID único de la mascota (STRING)
      public nombre: string,           // Nombre de la mascota (STRING de hasta 50 caracteres)
      public edad: string,             // Edad de la mascota (STRING, puede representar un número o texto)
      public raza: string,             // Raza de la mascota (STRING de hasta 50 caracteres)
      public especie: string,          // Especie de la mascota (STRING de hasta 50 caracteres)
      public sexo: string,             // Sexo de la mascota (ENUM con valores 'Macho' o 'Hembra')
      public descripcion: string,      // Descripción detallada de la mascota (TEXT)
      public estado: string,           // Estado de la mascota (ENUM con valores 'Disponible' o 'Adoptada')
      public fecha_ingreso: string,    // Fecha de ingreso de la mascota (STRING que representa una fecha)
      public foto_url: string          // URL de la foto de la mascota (STRING de hasta 255 caracteres)
    ) {}
  }
  