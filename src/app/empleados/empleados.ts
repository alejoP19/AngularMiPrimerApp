import { Component } from '@angular/core';
 import { EmpleadoComponent } from "../empleado/empleado";
 


@Component({
  selector: 'app-empleados',
  standalone: true,
  imports: [ EmpleadoComponent],
  templateUrl: './empleados.html',
 styleUrls: ['./empleados.css']
})
export class EmpleadosComponent {
  
}
