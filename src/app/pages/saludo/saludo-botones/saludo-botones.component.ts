import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saludo-botones',
  imports: [CommonModule],
  templateUrl: './saludo-botones.component.html',
  styleUrl: './saludo-botones.component.css'
})
export class SaludoBotonesComponent {
  constructor( private router: Router){}

  @Input() mostrarSaludo = true;
  @Input() colorSaludo = '';
  @Input() nombre = '';

  @Output() mostrarSaludoChange = new EventEmitter<boolean>();
  @Output() colorSaludoChange = new EventEmitter<string>();
  @Output() nombreChange = new EventEmitter<string>();

  cambiarColor(color: string) {

    this.colorSaludoChange.emit(color);
  }


  invertirEstadoSaludo() {

    this.mostrarSaludoChange.emit(!this.mostrarSaludo);
  }

  despedirse()
  {
    this.router.navigate(['/despedida', this.nombre]);
  }


}
