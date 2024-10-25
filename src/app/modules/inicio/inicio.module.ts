import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InicioRoutingModule } from './inicio-routing.module';
// VISTA-PAGINA
import { InicioComponent } from './pages/inicio/inicio.component';
// COMPONENTES LOCALES
import { CardComponent } from './card/card.component';
// COMPONENTES DE MATERIAL
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import { RankingComponent } from './ranking/ranking.component';


@NgModule({
  declarations: [
    InicioComponent,
    CardComponent,
    RankingComponent
  ],
  imports: [
    CommonModule,
    InicioRoutingModule,
    MatButtonModule,
    MatCardModule,
  ],
  exports: [
    MatButtonModule,
    MatCardModule
  ]
})
export class InicioModule { }
