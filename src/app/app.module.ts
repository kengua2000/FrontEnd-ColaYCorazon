import { NgModule } from '@angular/core'; // Importa NgModule desde Angular core
import { BrowserModule, provideClientHydration } from '@angular/platform-browser'; // Importa BrowserModule y provideClientHydration
import { provideHttpClient } from '@angular/common/http'; // Importa el servicio HttpClient
import { AppRoutingModule } from './app-routing.module'; // Importa el módulo de rutas
import { AppComponent } from './app.component'; // Importa el componente principal de la aplicación

import { FormsModule } from '@angular/forms'; // Importa FormsModule para formularios reactivos

// Importación de componentes utilizados en la aplicación
import { ListaMascotasComponent } from './lista-mascotas/lista-mascotas.component';
import { EditarMascotasComponent } from './editar-mascotas/editar-mascotas.component';
import { ListaClientesComponent } from './lista-clientes/lista-clientes.component';
import { EditarClientesComponent } from './editar-clientes/editar-clientes.component';
import { ListaSolicitudesComponent } from './lista-solicitudes/lista-solicitudes.component';
import { EditarSolicitudesComponent } from './editar-solicitudes/editar-solicitudes.component';
import { HomeColaycorazonComponent } from './home-colaycorazon/home-colaycorazon.component';
import { MascotaDetallesComponent } from './mascota-detalles/mascota-detalles.component';
import { LoginComponent } from './login/login.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap'; // Importa el módulo de Bootstrap para Angular

@NgModule({
  declarations: [
    AppComponent, // Componente principal de la aplicación
    ListaMascotasComponent, // Componente para listar mascotas
    EditarMascotasComponent, // Componente para editar mascotas
    ListaClientesComponent, // Componente para listar clientes
    EditarClientesComponent, // Componente para editar clientes
    ListaSolicitudesComponent, // Componente para listar solicitudes
    EditarSolicitudesComponent, // Componente para editar solicitudes
    HomeColaycorazonComponent, // Componente para la página de inicio
    MascotaDetallesComponent, // Componente para mostrar detalles de una mascota
    LoginComponent // Componente para el inicio de sesión
  ],
  imports: [
    BrowserModule, // Módulo principal del navegador
    AppRoutingModule, // Módulo de rutas de la aplicación
    FormsModule, // Módulo para formularios reactivos
    NgbModule // Módulo de Bootstrap para Angular
  ],
  providers: [
    provideHttpClient(), // Proporciona el servicio HttpClient
    provideClientHydration() // Proporciona la hidratación del cliente para aplicaciones universales
  ],
  bootstrap: [AppComponent] // Componente que se inicia al cargar la aplicación
})
export class AppModule { } // Exporta el módulo principal de la aplicación
