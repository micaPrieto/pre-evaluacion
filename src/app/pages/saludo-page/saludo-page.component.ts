import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { Router } from '@angular/router';
import { SaludoBotonesComponent } from "../../components/saludo-botones/saludo-botones.component";
import { SaludoTextoComponent } from "../../components/saludo-texto/saludo-texto.component";
import { mayusculaPipe } from '../../pipes/upper-case.pipe';
import { SaludoInputNombreComponent } from "../../components/saludo-input-nombre/saludo-input-nombre.component";


@Component({
  selector: 'app-saludo',
  imports: [
    CommonModule,
    SaludoBotonesComponent,
    SaludoTextoComponent,
    mayusculaPipe,
    SaludoInputNombreComponent
],
  templateUrl: './saludo-page.component.html'
})
export class SaludoComponent {

  nombre :string = '';
  mostrarSaludo :boolean = false;
  colorSaludo:string = ''


}
