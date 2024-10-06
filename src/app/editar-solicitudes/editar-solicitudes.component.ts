import { Component, OnInit } from '@angular/core';
import { SolicitudModel } from '../shared/solicitud.model';
import { SolicitudService } from '../shared/solicitud.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-solicitudes',
  templateUrl: './editar-solicitudes.component.html',
  styleUrls: ['./editar-solicitudes.component.css']
})
export class EditarSolicitudesComponent implements OnInit {

  idSolicitud = '';  // Variable para almacenar el ID de la solicitud
  solicitud = new SolicitudModel('', '', ''); // Crear un nuevo modelo de solicitud

  constructor(private solicitudService: SolicitudService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    // Obtener el ID de la solicitud desde la ruta activa
    this.idSolicitud = this.route.snapshot.params['idSolicitud'];
    console.log(`El idSolicitud es ${this.idSolicitud}`);

    if (this.idSolicitud) {
      // Si hay un id, estamos en modo de edición
      console.log('La solicitud viene de Editar');
      this.solicitudService.obtenerSolicitud(this.idSolicitud).subscribe({
        next: data => {
          console.log(data);  // Imprimir los datos de la solicitud obtenida
          this.solicitud = data;  // Asignar los datos al modelo de solicitud
          console.log(this.solicitud);
        },
        error: err => {
          console.log(`Error al obtener solicitud: ${err}`);  // Manejo de errores
        }
      });
    } else {
      // Si no hay id, estamos creando una nueva solicitud
      console.log('La solicitud viene de Nueva Solicitud');
    }
  }

  onSubmit() {
    console.log("On Submit");

    if (this.solicitud.id_solicitud) {
      // Si la solicitud tiene un id, estamos en modo de edición
      this.solicitudService.actualizarSolicitud(this.solicitud).subscribe({
        next: data => {
          console.log('Solicitud actualizada con éxito', data);  // Confirmación de actualización
          this.router.navigate(['/solicitudes']); // Redirigir a la lista de solicitudes
        },
        error: err => {
          console.log(`Error al actualizar la solicitud: ${err}`);  // Manejo de errores
        }
      });
    } else {
      // Si no tiene id, estamos creando una nueva solicitud
      this.solicitudService.agregarSolicitud(this.solicitud).subscribe({
        next: data => {
          console.log('Solicitud creada con éxito', data);  // Confirmación de creación
          this.router.navigate(['/solicitudes']); // Redirigir a la lista de solicitudes
        },
        error: err => {
          console.log(`Error al agregar la solicitud: ${err}`);  // Manejo de errores
        }
      });
    }
  }
}
