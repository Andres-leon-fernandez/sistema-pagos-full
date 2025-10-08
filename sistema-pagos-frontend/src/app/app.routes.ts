import { Routes } from '@angular/router';
import { AdminTemple } from './core/admin-temple/admin-temple';
import { Home } from './layout/home/home';
import { Profile } from './layout/profile/profile';
import { Login } from './layout/login/login';
import { LoadEstudiantes } from './layout/load-estudiantes/load-estudiantes';
import { LoadPagos } from './layout/load-pagos/load-pagos';
import { Dashboard } from './layout/dashboard/dashboard';
import { Estudiantes } from './layout/estudiantes/estudiantes';
import { Pagos } from './layout/pagos/pagos';

export const routes: Routes = [
  { path: '', component: Login },
  { path: 'login', component: Login },
  {
    path: 'admin', component: AdminTemple, children: [
      { path: 'home', component: Home },
      { path: 'profile', component: Profile },
      { path: 'loadEstudiantes', component: LoadEstudiantes },
      { path: 'loadPagos', component: LoadPagos },
      { path: 'dashboard', component: Dashboard },
      { path: 'estudiantes', component: Estudiantes },
      { path: 'pagos', component: Pagos }
    ]
  }
];
