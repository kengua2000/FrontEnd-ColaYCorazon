import { HttpClient } from '@angular/common/http'; // Importa HttpClient para realizar peticiones HTTP
import { Injectable } from '@angular/core'; // Importa Injectable para permitir la inyección de dependencias
import { ClienteModel } from './cliente.model';  // Importa el modelo para el cliente

@Injectable({
  providedIn: 'root' // Indica que este servicio es proporcionado en la raíz de la aplicación
})
export class ClienteService {
  BASE_URL = 'http://localhost:4000'; // URL base para las API de clientes
  
  constructor(private http: HttpClient) { } // Inyección de HttpClient en el constructor

  // Método para obtener la lista completa de clientes
  obtenerClientes() {
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/clientes/buscarCliente`); // Realiza una petición GET
  }

  // Método para obtener un cliente por su ID
  obtenerCliente(idCliente: string) {
    return this.http.get<ClienteModel>(`${this.BASE_URL}/clientes/buscarIdCliente/${idCliente}`); // Realiza una petición GET para un cliente específico
  }

  // Método para buscar clientes por un filtro
  buscarClientesPorFiltro(filtro: string) {
    return this.http.get<ClienteModel[]>(`${this.BASE_URL}/clientes/buscarClientePorFiltro`, {
      params: { filtro }  // Envía el filtro como un parámetro de query string
    });
  }

  // Método para crear un nuevo cliente
  agregarCliente(cliente: ClienteModel) {
    return this.http.post<string>(`${this.BASE_URL}/clientes/crearCliente`, cliente); // Realiza una petición POST para agregar un nuevo cliente
  }

  // Método para actualizar un cliente existente
  actualizarCliente(cliente: ClienteModel) {
    return this.http.put<string>(`${this.BASE_URL}/clientes/actualizarCliente/${cliente.id_cliente}`, cliente); // Realiza una petición PUT para actualizar
  }

  // Método para eliminar un cliente por su ID
  borrarClientes(idCliente: string) {
    return this.http.delete<string>(`${this.BASE_URL}/clientes/eliminarCliente/${idCliente}`); // Realiza una petición DELETE para eliminar
  }
}
