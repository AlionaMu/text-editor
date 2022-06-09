import { Component, OnInit } from '@angular/core';

import {
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
//import { Note } from './../../models/note.model';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  public noteForm: FormGroup = {} as FormGroup;

  public constructor(
    private formBuilder: FormBuilder,
    public service: NoteService
  ) {
   }

  public ngOnInit(): void {
    this.initNoteForm();
  }

  public onSubmit(): void {
    const text: string = this.noteForm.get('text')?.value;
    const tags: string = this.noteForm.get('tags')?.value;
    this.service.set(text, tags);
  }

  private initNoteForm(): void {
    console.log('hh')
    this.noteForm = this.formBuilder.group({
      text: new FormControl('enter text'),
      tags: new FormControl('enter tags'),
    });
  }

}
