import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PedidoComponent } from './pedido/pedido/pedido.component';

const routes: Routes = [
  {
    path:'carrito',component:PedidoComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CarritoRoutingModule { }
