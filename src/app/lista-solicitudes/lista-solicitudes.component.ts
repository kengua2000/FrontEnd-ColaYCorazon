import { Component, OnInit } from '@angular/core'; // Importa las dependencias necesarias de Angular.
import { Observable } from 'rxjs'; // Importa la clase Observable para manejar flujos de datos.
import { SolicitudModel } from '../shared/solicitud.model'; // Importa el modelo de Solicitud.
import { SolicitudService } from '../shared/solicitud.service'; // Importa el servicio de Solicitud.

@Component({
  selector: 'app-lista-solicitudes', // Selector del componente.
  templateUrl: './lista-solicitudes.component.html', // Plantilla HTML asociada.
  styleUrl: './lista-solicitudes.component.css' // Estilo CSS asociado.
})
export class ListaSolicitudesComponent implements OnInit {
  solicitudes: Observable<SolicitudModel[]> | undefined; // Observable que almacena la lista de solicitudes.

  constructor(private solicitudService: SolicitudService) {} // Inyecta el servicio de solicitudes.

  ngOnInit() {
    this.solicitudes = this.solicitudService.obtenerSolicitudes(); // Obtiene las solicitudes al iniciar el componente.
  }

  borrarSolicitud(idSolicitud: string) {
    this.solicitudService.borrarSolicitud(idSolicitud).subscribe({ // Llama al servicio para eliminar una solicitud.
      next: data => {
        console.log(`Solicitud Eliminada`); // Mensaje de éxito en consola.
        this.ngOnInit();  // Refresca la lista de solicitudes.
      },
      error: err => {
        console.log(`Error al eliminar Solicitud ${err}`); // Mensaje de error en consola.
      }
    });
  }
}
