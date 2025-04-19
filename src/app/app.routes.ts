import { Routes } from '@angular/router';
import { SaludoComponent } from './components/saludo/saludo.component';
import { DespedidaComponent } from './components/despedida/despedida.component';

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
