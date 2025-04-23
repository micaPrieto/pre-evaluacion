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

  nombreIngresado:string = '';
  mensajeDeError: string = '';

  emitirNombre(){
    if(this.nombreIngresado !== '' ){
        this.nombreAEmitir.emit(this.nombreIngresado)
      }
    else {
        this.mensajeDeError = 'Debe ingresar un nombre'
    }
  }

}
