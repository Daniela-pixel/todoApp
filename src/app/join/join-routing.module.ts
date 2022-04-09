import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {JoinComponent} from "./join/join.component";

const routes: Routes = [
  {path: 'join', component: JoinComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class JoinRoutingModule { }
