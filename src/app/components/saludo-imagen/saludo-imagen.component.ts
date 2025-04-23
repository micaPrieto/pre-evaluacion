import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-saludo-imagen',
  imports: [CommonModule],
  templateUrl: './saludo-imagen.component.html'
})
export class SaludoImagenComponent {

  @Input()
  mostrarSaludo :boolean = true;



}
