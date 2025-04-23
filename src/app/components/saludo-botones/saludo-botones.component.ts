import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, input, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saludo-botones',
  imports: [CommonModule],
  templateUrl: './saludo-botones.component.html'
})
export class SaludoBotonesComponent {
  constructor( private router: Router){}

  @Input() nombre = '';

  @Output() colorSaludoChange = new EventEmitter<string>();
  @Output() mostrarSaludoFalse = new EventEmitter<boolean>();
  @Output() nombreChange = new EventEmitter<string>();


  cambiarColor(color: string) {
    this.colorSaludoChange.emit(color);
  }

  invertirEstadoSaludo() {
    this.mostrarSaludoFalse.emit(false);
  }

  despedirse() {
    this.nombreChange.emit('');
    this.router.navigate(['/despedida', this.nombre]);
  }

}
