import { Routes } from '@angular/router';

/*importar componentes (principales) antes de mapear */
import { Inicio } from './inicio/inicio';
import { Accesorios } from './accesorios/accesorios';
import { Bolsos } from './bolsos/bolsos';
import { Ropa } from './ropa/ropa';
import { Contact } from './contact/contact';
export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'accesorios', component: Accesorios},
    {path: 'bolsos', component: Bolsos},
    {path: 'ropa', component:Ropa},
    {path: 'contact',component:Contact}
];
