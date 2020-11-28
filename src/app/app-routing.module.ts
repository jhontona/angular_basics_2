import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/components/home/home.component';
import { MasterLayoutComponent } from './layout/master-layout/master-layout.component';

// const routes: Routes = [
//   {
//     path: '',
//     component: HomeComponent
//   }
// ];

const routes: Routes = [
  {
    path: '',
    component: MasterLayoutComponent,
    children: [
      {
        path: '',
        component: HomeComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
