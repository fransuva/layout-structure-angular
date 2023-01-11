import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LayoutsComponent } from '../layouts/layouts.component';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      {
          path: 'home',
          component: HomeComponent,
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
