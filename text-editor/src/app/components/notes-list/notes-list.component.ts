import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { Note } from './../../models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  public notes: Note[] = this.noteService.get();
  constructor(public noteService: NoteService) { }

  ngOnInit(): void {
    const data = this.notes;
    console.log(data)
  }
}
