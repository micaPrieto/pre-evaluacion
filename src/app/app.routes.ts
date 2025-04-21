import { Routes } from '@angular/router';
import { DespedidaComponent } from './pages/despedida/despedida.component';
import { SaludoComponent } from './pages/saludo/saludo.component';

export const routes: Routes = [
  {
    path:'saludo',
    component: SaludoComponent,
  },
  {
    path:'despedida/:nombre',
    component: DespedidaComponent,
  },
  {
    path: '**',
    redirectTo: 'saludo'
  }
];
