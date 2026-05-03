import { Component } from '@angular/core';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [],
  templateUrl: './empleado.html',
  styleUrl: './empleado.css',
})
export class EmpleadoComponent {

nombre ='Josefina';
apellido ='Arbelaez';
edad =48;
empresa = 'Ramo';


}
