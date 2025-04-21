import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { SaludoBotonesComponent } from "./saludo-botones/saludo-botones.component";
import { SaludoTextoComponent } from "./saludo-texto/saludo-texto.component";
import { mayusculaPipe } from '../../pipes/upper-case.pipe';


@Component({
  selector: 'app-saludo',
  imports: [
    CommonModule,
    SaludoBotonesComponent,
    SaludoTextoComponent,
    mayusculaPipe
  ],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  nombre :string = 'Micaela';
  mostrarSaludo :boolean = true;
  colorSaludo:string = ''

  mostrarValorSaludo ()
  {
    console.log(this.mostrarSaludo);
  }
}
