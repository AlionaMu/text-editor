import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { StorageService } from 'src/app/services/storage.service';
import { Note } from './../../models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  public data: Note[] = this.noteService.get();
  public notes = this.data;

  constructor(public storageService: StorageService, public noteService: NoteService) { }

  ngOnInit(): void {
    this.storageService.data$.subscribe((data: any) => {
      this.notes = data;
    })
  }
}
