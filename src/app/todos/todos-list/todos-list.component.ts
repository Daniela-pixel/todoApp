import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {AuthService} from "../../login/auth.service";
import {HttpClient} from "@angular/common/http";

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styleUrls: ['./todos-list.component.scss']
})
export class TodosListComponent implements OnInit {
  @Output() newNoteEmitter: EventEmitter<any>;
  noteFG: FormGroup;
  postId: any;

  constructor(private fb: FormBuilder, private authS: AuthService, private httpClient: HttpClient) {
    this.newNoteEmitter = new EventEmitter();
    this.noteFG = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    })
  }

  ngOnInit(): void {
    this.postId = this.authS.getToken();
  }

  addNote(){
    const newNote = this.noteFG.getRawValue();
    this.newNoteEmitter.emit(newNote);
    const body = this.noteFG.value;
    console.log(this.postId);
    // this.httpClient.patch<any>('https://todo-app-8e04a-default-rtdb.firebaseio.com/users/-N-7yiTPjXxaSiShj5_j.json', body)
    //   .subscribe(data => this.postId = data.id);
    let todosUrl = 'https://todo-app-8e04a-default-rtdb.firebaseio.com/users/' + this.postId + '/todos.json';
    this.httpClient.put<any>(todosUrl, body)
      .subscribe(data => this.postId = data.id);
  }

}
