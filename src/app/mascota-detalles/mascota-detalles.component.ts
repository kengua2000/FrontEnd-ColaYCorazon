import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router'; // Permite acceder a parámetros de la ruta activa
import { MascotaService } from '../shared/mascota.service'; // Servicio para manejar la lógica relacionada con las mascotas
import { MascotaModel } from '../shared/mascota.model'; // Modelo de datos para las mascotas

@Component({
  selector: 'app-mascota-detalles', // Selector para usar este componente en plantillas
  templateUrl: './mascota-detalles.component.html', // Ruta del archivo de plantilla HTML
  styleUrls: ['./mascota-detalles.component.css'] // Ruta del archivo de estilos CSS
})
export class MascotaDetallesComponent implements OnInit {
  public hoverImage: boolean = false; // Estado del hover para la imagen
  public hoverAdoptButton: boolean = false; // Estado del hover para el botón de adopción
  mascota: MascotaModel | undefined; // Modelo de la mascota, inicialmente indefinido

  constructor(
    private route: ActivatedRoute, // Inyección del servicio ActivatedRoute para acceder a los parámetros de la ruta
    private mascotaService: MascotaService // Inyección del servicio MascotaService
  ) {}

  ngOnInit(): void {
    // Al iniciar el componente, obtén el ID de la mascota desde los parámetros de la ruta
    const idMascota = this.route.snapshot.paramMap.get('idMascota'); // Obtiene el ID de la mascota desde la URL
    if (idMascota) { // Verifica si se obtuvo un ID válido
      this.mascotaService.obtenerMascota(idMascota).subscribe({
        next: (data) => {
          console.log('Datos de la mascota:', data); // Imprime los datos de la mascota en la consola para verificar
          this.mascota = data; // Asigna los datos obtenidos a la propiedad mascota
        },
        error: (err) => {
          console.error('Error al cargar los detalles de la mascota', err); // Manejo de errores al obtener los datos
        }
      });
    }
  }
}
