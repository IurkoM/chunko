import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoRoutingModule } from './producto-routing.module';
import { ProductoComponent } from './page/producto/producto.component';
import { AccesorioComponent } from './page/accesorio/accesorio.component';
import { IndumentariaComponent } from './page/indumentaria/indumentaria.component';
import { InformacionComponent } from './page/informacion/informacion.component';
import { CardComponent } from '../inicio/card/card.component';
import { CardJuguetesComponent } from './components/card-juguetes/card-juguetes.component';

import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { JuguetesComponent } from './page/juguetes/juguetes.component';
import { Card2Component } from './components/card2/card2.component';


@NgModule({
  declarations: [
    ProductoComponent,
    AccesorioComponent,
    IndumentariaComponent,
    InformacionComponent,
    CardJuguetesComponent,
    JuguetesComponent,
    Card2Component
  ],
  imports: [
    CommonModule,
    ProductoRoutingModule,
    MatButtonModule,
    MatCardModule
  ]
})
export class ProductoModule { }
