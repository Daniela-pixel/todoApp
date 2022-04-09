import {Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges} from '@angular/core';
import {FormBuilder, FormGroup} from "@angular/forms";
import {NoteService} from '../note.service';

@Component({
  selector: 'app-add-edit-todo',
  templateUrl: './add-edit-todo.component.html',
  styleUrls: ['./add-edit-todo.component.scss']
})
export class AddEditTodoComponent implements OnInit, OnChanges {
  @Input() note: any;
  // @Output() saveToDo: EventEmitter<any>;
  noteFG: FormGroup;
  changes = false;

  constructor(private fb: FormBuilder, private noteS: NoteService) {
    // this.saveToDo = new EventEmitter();
    this.noteFG = this.fb.group({
      title: [''],
      text: ['']
    })
  }

  ngOnInit(): void {

  }

  save(){
    this.noteS.sendNote(this.noteFG.getRawValue());
  }

  ngOnChanges(changes: SimpleChanges) {
    this.noteFG.controls.title.setValue(this.note.title);
    this.noteFG.controls.text.setValue(this.note.text);
    this.changes = true;
  }

  // save(){
  //   if (this.changes){
  //     const noteValue = this.noteFG.getRawValue();
  //     this.saveToDo.emit(noteValue);
  //   }
  // }

}
