import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MascotaModel } from './mascota.model';

@Injectable({
  providedIn: 'root'
})
export class MascotaService {

  // URL base del backend
  BASE_URL='http://localhost:4000';
  
  // Inyección de dependencias del HttpClient
  constructor(private http: HttpClient) {
  }

  // Obtener la lista completa de mascotas
  obtenerMascotas(){
    return this.http.get<MascotaModel[]>(`${this.BASE_URL}/mascotas/buscarMascota`);
  }

  // Obtener una mascota por ID
  obtenerMascota(idMascota: string){
    return this.http.get<MascotaModel>(`${this.BASE_URL}/mascotas/buscarIdMascota/${idMascota}`);
  }

  // Buscar mascotas por filtro (en cualquier columna)
  buscarMascotasPorFiltro(filtro: string) {
    return this.http.get<MascotaModel[]>(`${this.BASE_URL}/mascotas/buscarMascotaPorFiltro`, {
      params: { filtro }  // Enviar el filtro como un parámetro de query string
    });
  }

  // Crear una nueva mascota
  agregarMascota(mascota: MascotaModel){
    return this.http.post<string>(`${this.BASE_URL}/mascotas/crearMascota`, mascota);
  }

  // Actualizar una mascota existente
  actualizarMascota(mascota: MascotaModel){
    return this.http.put<string>(`${this.BASE_URL}/mascotas/actualizarMascota/${mascota.id_mascota}`, mascota);
  }

  // Eliminar una mascota por su ID
  borrarMascota(idMascota: string){
    return this.http.delete<string>(`${this.BASE_URL}/mascotas/eliminarMascota/${idMascota}`);
  }
}
