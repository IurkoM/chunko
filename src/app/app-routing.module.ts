import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InicioComponent } from './modules/inicio/pages/inicio/inicio.component';
import { NavbarComponent } from './modules/shared/components/navbar/navbar.component';
import { SoporteComponent } from './modules/shared/components/soporte/soporte.component';
import { NosotrosComponent } from './modules/shared/components/nosotros/nosotros.component';

const routes: Routes = [
  // Ruta comun -> componente
  {
    path:"",component:InicioComponent
  },
  {
    path:"soporte",component:SoporteComponent
  },
  {
    path:"nosotros",component:NosotrosComponent
  },
  {
    path:"",component:NavbarComponent
  },
  // Carga PERESOSA -> Ruta que te lleva a un modulo especifico
  // loadChildren: indica que habra una ruta hija
  // ()=> import: funcion flecha que importa desde la ruta
  // .then: Funcion asincronica del tipo PROMESA
  {
    path:"",loadChildren:()=>import('./modules/inicio/inicio.module').then(m=>m.InicioModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/producto/producto.module').then(m=>m.ProductoModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/autentificacion/autentificacion.module').then(m=>m.AutentificacionModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/admin/admin.module').then(m=>m.AdminModule)
  },
  {
    path:"",loadChildren:()=>import('./modules/carrito/carrito.module').then(m=>m.CarritoModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
