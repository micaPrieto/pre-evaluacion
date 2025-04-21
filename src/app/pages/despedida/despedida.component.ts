import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-despedida',
  imports: [],
  templateUrl: './despedida.component.html',
  styleUrl: './despedida.component.css'
})
export class DespedidaComponent {


      router = inject(Router);

      nombre : string = '';
      recibirNombre= inject(ActivatedRoute).params.subscribe((params) =>{
          this.nombre = params['nombre'];
      })


      saludar()
      {
        this.router.navigate(['/saludo']);
      }


}
