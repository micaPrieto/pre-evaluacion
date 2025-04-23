import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SaludoImagenComponent } from "../../shared/imagen/imagen.component";

@Component({
  selector: 'app-despedida',
  imports: [SaludoImagenComponent],
  templateUrl: './despedida-page.component.html'
})
export class DespedidaComponent {

      router = inject(Router);

      nombreRecibidoPorURL : string = '';

      recibirNombre= inject(ActivatedRoute).params.subscribe((params) =>{
          this.nombreRecibidoPorURL = params['nombre'];
      })

      volverASaludo(){
        this.router.navigate(['/saludo']);
      }
}
