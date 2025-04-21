import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saludo-input-nombre',
  imports: [FormsModule],
  templateUrl: './saludo-input-nombre.component.html'
})
export class SaludoInputNombreComponent {


  @Output()
  nombreAEmitir: EventEmitter<string>= new EventEmitter()

  nombre:string = '';
  mensajeDeError: string = '';

  emitirNombre(){
    if(this.nombre !== '' ){
        this.nombreAEmitir.emit(this.nombre)
      }
    else {
        this.mensajeDeError = 'Debe ingresar un nombre'
    }

  }

}
