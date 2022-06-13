import { Component, OnInit } from '@angular/core';
import { Tag } from './../../models/tag.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { StorageService } from 'src/app/services/storage.service';

import {
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';
import { TagsStorageService } from 'src/app/services/tags-storage.service';
import { FindHashService } from 'src/app/services/find-hash.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  public noteForm: FormGroup = {} as FormGroup;

  public addOnBlur = true;
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;
  public tags: Tag[] = this.tagsStorageService.getAllTags();

  public constructor (
    private formBuilder: FormBuilder,
    public noteService: NoteService,
    public tagsStorageService: TagsStorageService,
    public findHashService: FindHashService
  ) {}

  public ngOnInit(): void {
    this.initNoteForm();
  }

  public onSubmit(): void {
    const text: string = this.noteForm.get('text')?.value;
    this.noteService.set(text, this.findHash(text));
    this.tagsStorageService.allTagsList$.next(this.tagsStorageService.getAllTags());
    this.noteForm.reset();
  }

  private initNoteForm(): void {
    this.noteForm = this.formBuilder.group({
      text: new FormControl(''),
      tags: new FormControl(''),
    });
  }

  private findHash(text: string): Tag[] {
    return this.findHashService.findByHash(text);
  }
}
