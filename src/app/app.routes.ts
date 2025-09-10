import { Routes } from '@angular/router';


import { Inicio } from './inicio/inicio';
import { Accesorios } from './accesorios/accesorios';
import { Bolsos } from './bolsos/bolsos';
import { Ropa } from './ropa/ropa';
import { Contact } from './contact/contact';
import { Cart } from './cart/cart';

export const routes: Routes = [
    {path: '', component: Inicio},
    {path: 'accesorios', component: Accesorios},
    {path: 'bolsos', component: Bolsos},
    {path: 'ropa', component:Ropa},
    {path: 'contact',component:Contact},
    {path: 'cart',component:Cart}

];
