import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {
  @Output() newNoteEmitter: EventEmitter<any>;
  noteFG: FormGroup;

  constructor(private fb: FormBuilder) {
    this.newNoteEmitter = new EventEmitter();
    this.noteFG = this.fb.group({
      title: ['', Validators.required],
      text: ['', Validators.required]
    })
  }

  ngOnInit(): void {
  }

  addNote(){
    const newNote = this.noteFG.getRawValue();
    this.newNoteEmitter.emit(newNote);
  }

}
