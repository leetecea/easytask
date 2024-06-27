import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CardComponent } from './card/card.component';



@NgModule({
  declarations: [CardComponent], // declara os componentes que serão utilizados no módulo
  imports: [
    CommonModule
  ],
  exports: [CardComponent] // exporta o componente para ser utilizado em outros módulos
})
export class SharedModule { }
