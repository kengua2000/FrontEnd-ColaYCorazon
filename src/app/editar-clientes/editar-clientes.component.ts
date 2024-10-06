import { Component, OnInit } from '@angular/core';
import { ClienteModel } from '../shared/cliente.model';
import { ClienteService } from '../shared/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-editar-clientes',
  templateUrl: './editar-clientes.component.html',
  styleUrls: ['./editar-clientes.component.css'] // Corrige 'styleUrl' a 'styleUrls'
})
export class EditarClientesComponent implements OnInit {

  idCliente = ''; // Almacena el ID del cliente a editar
  cliente = new ClienteModel('', '', '', '', '', ''); // Inicializa un nuevo modelo de cliente

  constructor(private clienteService: ClienteService, private route: ActivatedRoute, private router: Router) {}

  ngOnInit() {
    this.idCliente = this.route.snapshot.params['idCliente']; // Obtiene el ID del cliente de la ruta
    console.log(`El idCliente es ${this.idCliente}`);

    if (this.idCliente) {
      // Si hay un ID, se está editando un cliente
      console.log('La solicitud viene de Editar');
      this.clienteService.obtenerCliente(this.idCliente).subscribe({
        next: data => {
          console.log(data);
          this.cliente = data; // Asigna los datos obtenidos al modelo
          console.log(this.cliente);
        },
        error: err => {
          console.log(`Error al obtener cliente: ${err}`); // Manejo de error al obtener el cliente
        }
      });
    } else {
      // Si no hay ID, se está creando un nuevo cliente
      console.log('La solicitud viene de Nuevo Cliente');
    }
  }

  onSubmit() {
    if (this.cliente.id_cliente) {
      // Si el cliente tiene un ID, se actualiza
      this.clienteService.actualizarCliente(this.cliente).subscribe({
        next: data => {
          console.log('Cliente actualizado con éxito', data); // Mensaje de éxito
          this.router.navigate(['/clientes']); // Redirigir a la lista de clientes
        },
        error: err => {
          console.log(`Error al actualizar el cliente: ${err}`); // Manejo de error al actualizar
        }
      });
    } else {
      // Si no tiene ID, se crea un nuevo cliente
      this.clienteService.agregarCliente(this.cliente).subscribe({
        next: () => {
          console.log('Cliente creado con éxito'); // Mensaje de éxito
          this.router.navigate(['/clientes']); // Redirigir a la lista de clientes
        },
        error: err => {
          console.log(`Error al agregar el cliente: ${err}`); // Manejo de error al agregar
        }
      });
    }
  }
}
