import {Component, OnInit} from '@angular/core';
import {NoteService} from './note.service';
import {AuthService} from "./login/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'Todo List';
  notes: any;
  selectedNote: any;
  addToDoMode = false;
  editMode = false;
  noteMessage: any;

  constructor(private noteS: NoteService, private authS: AuthService) {
    this.notes = [];
  }

  ngOnInit(): void {
    this.noteS.noteSubject.subscribe(d => {
      if(this.editMode){
        this.selectedNote.title = d.title;
        this.selectedNote.text = d.text;
      }
      this.editMode = false;
    });
  }

  handleNewNote(newNote: any){
    this.notes.push(newNote);
    this.addToDoMode = false;
  }

  addToDo(){
    this.addToDoMode = true;
  }

  edit(note: any){
    this.selectedNote = note;
    this.editMode = true;
  }

  delete(note: any){
    const index: number = this.notes.indexOf(note);
    if (index !== -1) {
      this.notes.splice(index, 1);
    }
  }

  logout(): void{
    this.authS.logout();
  }

  // handleSave(noteValue: any){
  //   this.selectedNote.title = noteValue.title;
  //   this.selectedNote.text = noteValue.text;
  //   this.editMode = false;
  // }

}
