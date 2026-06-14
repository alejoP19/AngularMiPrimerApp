import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-empleado',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './empleado.html',
 styleUrls: ['./empleado.css']
})

export class EmpleadoComponent {
  nombre ='Sebelina';
  apellido ='Parada';
  edad =18;

  empresa = 'Syspotec';

//   CambiarEmpresa(event:Event){
// this.empresa=(<HTMLInputElement>event.target).value
//   }


  habilitarCuadroProperty=true;

  userRegistedProperty= false;

  textoDeRegistro= '¿Desea Registrarse?'
//  getConfirmUserRegistred(){
//     this.userRegistedProperty=false;
//   }

  // setUsuarioRegistrado(){
  //  this.userRegistedProperty = !this.userRegistedProperty;

  // if (this.userRegistedProperty) {
  //   this.textoDeRegistro = '¡Usuario Registrado Exitosamente!';
  // } else {
  //   this.textoDeRegistro = 'No hay Usuarios Registrados';
  // }

      
  // }

  // llamar_empresa(value: string) {
  //   this.empresa = value;
  // }

    setUsuarioRegistrado(event:Event){
      let response= (<HTMLInputElement>event.target).value
      this.userRegistedProperty = !this.userRegistedProperty;
    
   if (response=='si') {
    this.textoDeRegistro = '¡Usuario Registrado Exitosamente!';
  } else {
    this.textoDeRegistro = 'Cuenta de Usuario Eliminada';
  }
  }
}


