import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { JoinRoutingModule } from './join-routing.module';
import { JoinComponent } from './join/join.component';
import {ReactiveFormsModule} from "@angular/forms";


@NgModule({
  declarations: [
    JoinComponent
  ],
  imports: [
    CommonModule,
    JoinRoutingModule,
    ReactiveFormsModule
  ]
})
export class JoinModule { }
