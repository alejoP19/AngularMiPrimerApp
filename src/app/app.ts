import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { EmpleadosComponent } from './empleados/empleados'; 
import { EmpleadoComponent } from './empleado/empleado';

@Component({
  selector: 'app-raiz-principal',
  standalone: true, // 🔥 faltaba
  imports: [RouterOutlet, EmpleadosComponent,EmpleadoComponent],
  templateUrl: './app_comp.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('Amiguito');
  saludo = "¡Continua Aprendiendo Angular!";
}

