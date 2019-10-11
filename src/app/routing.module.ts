import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { TelevisionComponent } from './views/television/television.component';

@NgModule({
  declarations: [ 
    TelevisionComponent
  ],
  imports: [
    RouterModule.forRoot([
      { path: 'television', component: TelevisionComponent }
    ])
  ],
  exports: [
    RouterModule,
  ],
  providers: [],
})
export class AppRoutingModule { }