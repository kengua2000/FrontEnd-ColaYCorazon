import { Component, OnInit } from '@angular/core';
import { MascotaModel } from '../shared/mascota.model'; // Importa el modelo de Mascota
import { MascotaService } from '../shared/mascota.service'; // Importa el servicio de Mascota
import { ActivatedRoute, Router } from '@angular/router'; // Importa para gestionar rutas

@Component({
  selector: 'app-editar-mascotas', // Seleccionador del componente
  templateUrl: './editar-mascotas.component.html', // Ruta de la plantilla asociada
  styleUrls: ['./editar-mascotas.component.css'] // Ruta de los estilos asociados
})
export class EditarMascotasComponent implements OnInit {

  idMascota = ''; // Variable para almacenar el ID de la mascota
  mascota = new MascotaModel('', '', '', '', '', '', '', '', '', ''); 
  // Inicializa un modelo vacío de Mascota para ser usado en el formulario

  // Constructor que inyecta el servicio de Mascota, la ruta activa y el router
  constructor(private mascotaService: MascotaService, private route: ActivatedRoute, private router: Router) {}

  // Método que se ejecuta al iniciar el componente
  ngOnInit() {
    // Obtiene el 'idMascota' desde los parámetros de la ruta
    this.idMascota = this.route.snapshot.params['idMascota'];
    console.log(`El idMascota es ${this.idMascota}`);

    // Si el 'idMascota' existe, se trata de una edición
    if (this.idMascota) {
      // Llama al servicio para obtener los datos de la mascota por ID
      this.mascotaService.obtenerMascota(this.idMascota).subscribe({
        next: data => {
          console.log(data); // Imprime los datos de la mascota obtenida
          this.mascota = data; // Asigna los datos al modelo de la mascota
        },
        error: err => {
          console.log(`Error al obtener la mascota: ${err}`); // Maneja errores en caso de fallos
        }
      });
    } else {
      // Si no hay 'idMascota', se trata de una nueva mascota
      console.log('Creando una nueva mascota');
    }
  }

  // Método que se llama al enviar el formulario
  onSubmit() {
    // Si hay un 'idMascota', se está actualizando una mascota existente
    if (this.idMascota) {
      // Llama al servicio para actualizar la mascota
      this.mascotaService.actualizarMascota(this.mascota).subscribe({
        next: data => {
          console.log('Mascota actualizada con éxito', data); // Imprime éxito en la consola
          this.router.navigate(['/mascotas2']); // Redirige a la lista de mascotas después de la actualización
        },
        error: err => {
          console.log(`Error al actualizar la mascota: ${err}`); // Maneja errores en caso de fallos
        }
      });
    } else {
      // Si no hay 'idMascota', se está creando una nueva mascota
      this.mascotaService.agregarMascota(this.mascota).subscribe({
        next: () => {
          console.log('Mascota creada con éxito'); // Imprime éxito en la consola
          this.router.navigate(['/mascotas2']); // Redirige a la lista de mascotas después de la creación
        },
        error: err => {
          console.log(`Error al agregar la mascota: ${err}`); // Maneja errores en caso de fallos
        }
      });
    }
  }
}
