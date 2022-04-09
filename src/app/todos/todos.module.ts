import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodosRoutingModule } from './todos-routing.module';
import { AddEditTodoComponent } from './add-edit-todo/add-edit-todo.component';
import {ReactiveFormsModule} from "@angular/forms";
import { TodosListComponent } from './todos-list/todos-list.component';
import { TodosComponent } from './todos/todos.component';

@NgModule({
  declarations: [
    AddEditTodoComponent,
    TodosListComponent,
    TodosComponent
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    ReactiveFormsModule
  ]
})
export class TodosModule { }
