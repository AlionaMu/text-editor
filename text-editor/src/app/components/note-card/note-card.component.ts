import { Component, OnInit, Input } from '@angular/core';
import { NoteService } from 'src/app/services/note.service';
import { StorageService } from 'src/app/services/storage.service';

export enum buttonTitle {
  Edit = 'edit',
  Save = 'save'
}

@Component({
  selector: 'app-note-card',
  templateUrl: './note-card.component.html',
  styleUrls: ['./note-card.component.scss']
})
export class NoteCardComponent implements OnInit {
  @Input() note: any;
  public isEditMode: boolean = false;
  public text!: string;
  public buttonTitle: string = buttonTitle.Edit;

  constructor(
    public noteService: NoteService,
    public storageService: StorageService
  ) { }

  public ngOnInit(): void {
    }

  public switchClick(id: string, text: string): void {
    this.isEditMode = !this.isEditMode;
    if (this.buttonTitle === buttonTitle.Edit) {
      this.buttonTitle = buttonTitle.Save;

    } else {
      this.buttonTitle = buttonTitle.Edit;
      this.storageService.editNote(text, id);
    }
  }

  public deleteNote(id: string) {
    this.storageService.deleteNote(id);
    this.noteService.get();
  }
}
