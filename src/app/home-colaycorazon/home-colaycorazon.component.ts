import { Component, OnInit } from '@angular/core'; // Importa los decoradores y tipos necesarios de Angular
import { MascotaModel } from '../shared/mascota.model'; // Importa el modelo de datos para Mascota
import { Observable } from 'rxjs'; // Importa Observable de RxJS para trabajar con datos asíncronos
import { MascotaService } from '../shared/mascota.service'; // Importa el servicio que maneja la lógica de mascotas

@Component({
  selector: 'app-home-colaycorazon', // Define el selector para usar este componente en HTML
  templateUrl: './home-colaycorazon.component.html', // Especifica el archivo HTML del componente
  styleUrls: ['./home-colaycorazon.component.css'] // Especifica el archivo CSS del componente
})
export class HomeColaycorazonComponent implements OnInit { // Clase principal del componente que implementa OnInit
  mascotas: Observable<MascotaModel[]> | undefined; // Define una propiedad para almacenar las mascotas

  constructor(private mascotaService: MascotaService) {} // Inyecta el servicio de mascotas en el constructor

  ngOnInit(): void { // Método que se ejecuta al inicializar el componente
    this.mascotas = this.mascotaService.obtenerMascotas(); // Llama al servicio para obtener la lista de mascotas
  }
}
