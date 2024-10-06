import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { MascotaService } from '../shared/mascota.service';
import { MascotaModel } from '../shared/mascota.model';

@Component({
  selector: 'app-lista-mascotas',
  templateUrl: './lista-mascotas.component.html',
  styleUrls: ['./lista-mascotas.component.css']
})
export class ListaMascotasComponent implements OnInit {
  // Observable para almacenar la lista de mascotas
  mascotas: Observable<MascotaModel[]> | undefined;
  // Filtro para la búsqueda de mascotas
  filtro: string = '';  

  // Inyección de dependencias del servicio MascotaService
  constructor(private mascotaService: MascotaService) {}

  // Método que se ejecuta al inicializar el componente
  ngOnInit() {
    this.mascotas = this.mascotaService.obtenerMascotas();  // Carga inicial de todas las mascotas
  }

  // Método para obtener todas las mascotas
  obtenerMascotas() {
    this.mascotas = this.mascotaService.obtenerMascotas();
  }

  // Método para buscar mascotas por filtro
  buscarMascotasPorFiltro() {
    // Verifica si el filtro no está vacío
    if (this.filtro.trim() !== '') {
      // Llama al servicio para buscar mascotas por filtro
      this.mascotaService.buscarMascotasPorFiltro(this.filtro).subscribe((data: MascotaModel[]) => {
        // Asigna los resultados filtrados a la variable mascotas
        this.mascotas = new Observable<MascotaModel[]>(observer => observer.next(data));
      });
    } else {
      // Si no hay filtro, carga todas las mascotas
      this.obtenerMascotas();
    }
  }

  // Método para borrar una mascota por su ID
  borrarMascota(idMascota: string) {
    // Llama al servicio para eliminar la mascota
    this.mascotaService.borrarMascota(idMascota).subscribe({
      next: () => {
        console.log(`Mascota Eliminada`);
        this.ngOnInit();  // Recarga la lista de mascotas tras eliminar una
      },
      error: err => {
        console.log(`Error al eliminar Mascota: ${err}`);
      }
    });
  }
}
