import { Routes } from '@angular/router';
import { SaludoComponent } from './pages/saludo-page/saludo-page.component';
import { DespedidaComponent } from './pages/despedida-page/despedida-page.component';

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
