import { Routes } from '@angular/router';
import { Home } from './home/home';
import { Login } from './login/login';
import { LoadEstudiantes } from './load-estudiantes/load-estudiantes';
import { LoadPagos } from './load-pagos/load-pagos';
import { Dashboard } from './dashboard/dashboard';
import { Estudiantes } from './estudiantes/estudiantes';
import { Pagos } from './pagos/pagos';
import { Profile } from './profile/profile';


export const routes: Routes = [
    { path: "home", component: Home },
    { path: "profile", component: Profile },
    { path: "login", component:Login },
    { path: "loadEstudiantes", component: LoadEstudiantes },
    { path: "loadPagos", component: LoadPagos },
    {path:"dashboard",component:Dashboard},
    {path:"estudiantes", component:Estudiantes},
    {path:"pagos",component:Pagos}
];
