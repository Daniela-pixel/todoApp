import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuard} from "./login/auth.guard";

const routes: Routes = [
  {path: 'join', loadChildren:()=>import('./join/join.module')
      .then(mod=>mod.JoinModule)},
  {path: 'login', loadChildren:()=>import('./login/login.module')
      .then(mod=>mod.LoginModule)},
  {path: 'contact', loadChildren:()=>import('./contact/contact.module')
      .then(mod=>mod.ContactModule)},
  {path: 'homepage', loadChildren:()=>import('./homepage/homepage.module')
      .then(mod=>mod.HomepageModule)},
  {path: 'todos', canActivate:[AuthGuard], loadChildren:()=>import('./todos/todos.module')
      .then(mod=>mod.TodosModule)},
  // {path: 'todos', loadChildren:()=>import('./todos/todos.module')
  //     .then(mod=>mod.TodosModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
