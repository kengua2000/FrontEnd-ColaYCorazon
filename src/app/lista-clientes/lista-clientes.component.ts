import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs'; // Importa Observable para manejar datos asíncronos
import { ClienteModel } from '../shared/cliente.model'; // Modelo de cliente
import { ClienteService } from '../shared/cliente.service'; // Servicio para manejar operaciones con clientes

@Component({
  selector: 'app-lista-clientes', // Selector del componente
  templateUrl: './lista-clientes.component.html', // Plantilla HTML del componente
  styleUrls: ['./lista-clientes.component.css'] // Estilos CSS del componente
})
export class ListaClientesComponent implements OnInit {
  clientes: Observable<ClienteModel[]> | undefined; // Observable que contiene la lista de clientes
  filtro: string = '';  // Propiedad para el filtro de búsqueda

  constructor(private clienteService: ClienteService) {} // Inyección de dependencia del servicio de clientes

  ngOnInit() {
    this.obtenerClientes();  // Cargar todos los clientes al iniciar el componente
  }

  // Método para obtener todos los clientes
  obtenerClientes() {
    this.clientes = this.clienteService.obtenerClientes(); // Llama al servicio para obtener la lista de clientes
  }

  // Método para buscar clientes por filtro
  buscarClientesPorFiltro() {
    if (this.filtro.trim() !== '') { // Verifica si el filtro no está vacío
      this.clienteService.buscarClientesPorFiltro(this.filtro).subscribe((data: ClienteModel[]) => {
        this.clientes = new Observable<ClienteModel[]>(observer => observer.next(data)); // Asigna los clientes filtrados
      });
    } else {
      this.obtenerClientes();  // Si no hay filtro, carga todos los clientes
    }
  }

  // Método para eliminar un cliente
  borrarCliente(idCliente: string) {
    this.clienteService.borrarClientes(idCliente).subscribe({
      next: () => {
        console.log(`Cliente Eliminado`); // Mensaje de confirmación en la consola
        this.ngOnInit();  // Refresca la lista de clientes al reiniciar el componente
      },
      error: err => {
        console.log(`Error al eliminar Cliente ${err}`); // Manejo de errores en caso de falla al eliminar
      }
    });
  }
}
