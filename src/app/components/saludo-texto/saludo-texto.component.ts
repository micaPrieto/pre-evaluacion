import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';

@Component({
  selector: 'app-saludo-texto',
  imports: [CommonModule],
  templateUrl: './saludo-texto.component.html',
  styleUrl: './saludo-texto.component.css'
})
export class SaludoTextoComponent {

  colorSaludo = input.required<string>();
  nombre = input.required<string>();

}
