import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados'; // 🔥 correcto
// import { EmpleadoComponent } from './empleado/empleado';

@Component({
  selector: 'app-raiz',
  standalone: true, // 🔥 faltaba
  imports: [RouterOutlet, EmpleadosComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('miprimeraApp');
  saludo = "¡Hola Amiguito sigue aprendiendo Angular!";
}