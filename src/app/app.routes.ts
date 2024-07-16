import { Routes } from '@angular/router';
import { Ejemplo1Component } from './ejemplos/ejemplo-1/ejemplo-1.component';
import { InicioSesionComponent } from './login/inicio-sesion/inicio-sesion.component';

export const routes: Routes = [
    {path: 'ejemplo-1', component: Ejemplo1Component},
    {path: 'inicio-sesion', component: InicioSesionComponent},
];
