import { CommonModule, NgClass } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-saludo',
  imports: [CommonModule],
  templateUrl: './saludo.component.html',
  styleUrl: './saludo.component.css'
})
export class SaludoComponent {

  constructor(private router : Router) {}


  nombre :string = 'Micaela';
  mostrarSaludo :boolean = true;
  colorSaludo:string = ''



  cambiarColor(color: string) {
    this.colorSaludo = color;
  }


  invertirEstadoSaludo() {
    if(this.mostrarSaludo){
        this.mostrarSaludo = false;
    }
    else {
      this.mostrarSaludo = true;
    }
  }

  despedirse()
  {
    this.router.navigate(['/despedida', this.nombre]);
  }




}
