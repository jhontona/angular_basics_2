import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from './../shared/shared.module';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './components/home/home.component';
import { BlocksComponent } from './components/blocks/blocks.component';
import { DemoComponent } from './components/demo/demo.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, BlocksComponent, DemoComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    FormsModule
  ]
})
export class HomeModule { }
