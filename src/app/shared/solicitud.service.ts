import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar peticiones HTTP.
import { Injectable } from '@angular/core'; // Importa Injectable para permitir la inyección de dependencias.
import { SolicitudModel } from './solicitud.model';// Importa el modelo de Solicitud.

@Injectable({
  providedIn: 'root' // Indica que el servicio está disponible en toda la aplicación.
})
export class SolicitudService {
  
  BASE_URL = 'http://localhost:4000'; // Define la URL base del API.
  
  constructor(private http: HttpClient) { } // Inyecta HttpClient en el constructor.

  // Método para obtener la lista completa de solicitudes
  obtenerSolicitudes() {
    return this.http.get<SolicitudModel[]>(`${this.BASE_URL}/solicitudes/buscarSolicitudesAdopcion`); // Realiza una petición GET.
  }

  // Método para obtener una solicitud específica por ID
  obtenerSolicitud(idSolicitud: string) {
    return this.http.get<SolicitudModel>(`${this.BASE_URL}/solicitudes/buscarIdSolicitudAdopcion/${idSolicitud}`); // Realiza una petición GET.
  }

  // Método para agregar una nueva solicitud
  agregarSolicitud(solicitud: SolicitudModel) {
    return this.http.post<string>(`${this.BASE_URL}/solicitudes/crearSolicitudAdopcion`, solicitud); // Realiza una petición POST.
  }

  // Método para actualizar una solicitud existente
  actualizarSolicitud(solicitud: SolicitudModel) {
    return this.http.put<string>(`${this.BASE_URL}/solicitudes/actualizarSolicitudAdopcion/${solicitud.id_solicitud}`, solicitud); // Realiza una petición PUT.
  }

  // Método para eliminar una solicitud por ID
  borrarSolicitud(idSolicitud: string) {
    return this.http.delete<string>(`${this.BASE_URL}/solicitudes/eliminarSolicitudAdopcion/${idSolicitud}`); // Realiza una petición DELETE.
  }
}
