import { NgModule } from '@angular/core'; // Importa NgModule desde Angular core
import { RouterModule, Routes } from '@angular/router'; // Importa RouterModule y Routes para la configuración de rutas

// Importación de componentes que se usarán en las rutas
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { LoginComponent } from './login/login.component';
import { MascotaDetallesComponent } from './mascota-detalles/mascota-detalles.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';
import { HomeColaycorazonComponent } from './home-colaycorazon/home-colaycorazon.component';

// Configuración de las rutas de la aplicación
const routes: Routes = [
  { path: 'home', component: HomeColaycorazonComponent }, // Ruta para el componente Home
  { path: 'home/detalles/:idMascota', component: MascotaDetallesComponent }, // Ruta para detalles de mascota

  { path: 'login', component: LoginComponent }, // Ruta para iniciar sesión

  // Rutas para gestionar mascotas
  { path: 'mascotas', component: ListaMascotasComponent }, // Lista de mascotas
  { path: 'mascotas/editar/:idMascota', component: EditarMascotasComponent }, // Editar mascota existente
  { path: 'mascotas/agregar', component: EditarMascotasComponent }, // Agregar nueva mascota

  // Rutas para gestionar clientes
  { path: 'clientes', component: ListaClientesComponent }, // Lista de clientes
  { path: 'clientes/agregar', component: EditarClientesComponent }, // Agregar nuevo cliente
  { path: 'clientes/editar/:idCliente', component: EditarClientesComponent }, // Editar cliente existente

  // Rutas para gestionar solicitudes
  { path: 'solicitudes', component: ListaSolicitudesComponent }, // Lista de solicitudes
  { path: 'solicitudes/agregar', component: EditarSolicitudesComponent }, // Agregar nueva solicitud
  { path: 'solicitudes/editar/:idSolicitud', component: EditarSolicitudesComponent }, // Editar solicitud existente

  { path: '**', redirectTo: '/home', pathMatch: 'full' } // Redirigir a home para rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)], // Importa RouterModule y configura las rutas
  exports: [RouterModule] // Exporta RouterModule para que esté disponible en toda la aplicación
})
export class AppRoutingModule { } // Exporta el módulo de rutas
