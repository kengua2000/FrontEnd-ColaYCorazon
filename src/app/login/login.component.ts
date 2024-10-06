import { Component } from '@angular/core'; // Importa el decorador Component desde Angular core
import { Router } from '@angular/router'; // Importa Router para la navegación entre rutas

@Component({
  selector: 'app-login', // Nombre del componente para usar en plantillas
  templateUrl: './login.component.html', // Ruta del archivo de plantilla HTML del componente
  styleUrls: ['./login.component.css'] // Ruta del archivo de estilos CSS del componente
})
export class LoginComponent {
  email: string = ''; // Propiedad para almacenar el correo electrónico ingresado
  password: string = ''; // Propiedad para almacenar la contraseña ingresada

  constructor(private router: Router) {} // Constructor que inyecta el servicio Router

  onSubmit() { // Método que se llama al enviar el formulario
    // Aquí puedes agregar la lógica de autenticación, como un servicio que verifique los credenciales
    console.log(`Email: ${this.email}, Password: ${this.password}`); // Muestra el correo y la contraseña en la consola
    
    // Simular autenticación exitosa
    if (this.email === 'administrador@udenar.com' && this.password === '123456') { // Verifica las credenciales
      this.router.navigate(['/mascotas']); // Redirige al inicio si la autenticación es exitosa
    } else {
      alert('Credenciales incorrectas'); // Muestra un mensaje de error si las credenciales son incorrectas
    }
  }
}
