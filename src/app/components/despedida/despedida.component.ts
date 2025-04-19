import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-despedida',
  imports: [],
  templateUrl: './despedida.component.html',
  styleUrl: './despedida.component.css'
})
export class DespedidaComponent {
      constructor(private router: Router) {}

      saludar()
      {
        this.router.navigate(['/saludo']);
      }


}
