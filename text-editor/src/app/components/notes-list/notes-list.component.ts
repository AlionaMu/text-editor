import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { StorageService } from 'src/app/services/storage.service';
import { TagsStorageService } from 'src/app/services/tags-storage.service';
import { Note } from './../../models/note.model';

@Component({
  selector: 'app-notes-list',
  templateUrl: './notes-list.component.html',
  styleUrls: ['./notes-list.component.scss']
})
export class NotesListComponent implements OnInit {
  public data: Note[] = this.noteService.get();
  public notes = this.data;

  constructor(
    public storageService: StorageService,
    public noteService: NoteService,
    public tagsStorageService: TagsStorageService
  ) { }

  ngOnInit(): void {
    this.storageService.data$.pipe().subscribe((data: any) => {
      this.notes = data;
    })
  }
}
