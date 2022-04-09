import { Injectable } from '@angular/core';
import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  public noteSubject = new BehaviorSubject<any>('');

  constructor() { }

  sendNote(data: any){
    this.noteSubject.next(data);
  }

}
