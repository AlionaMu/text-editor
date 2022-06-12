import { Component, OnInit } from '@angular/core';

import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';

export interface Fruit {
  name: string;
}

import {
  FormGroup,
  FormControl,
  FormBuilder,
} from '@angular/forms';
import { NoteService } from 'src/app/services/note.service';

@Component({
  selector: 'app-note-form',
  templateUrl: './note-form.component.html',
  styleUrls: ['./note-form.component.scss']
})
export class NoteFormComponent implements OnInit {
  public noteForm: FormGroup = {} as FormGroup;

  public addOnBlur = true;
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;
  public fruits: Fruit[] = [{name: 'Lemon'}, {name: 'Lime'}, {name: 'Apple'}];

  public constructor (
    private formBuilder: FormBuilder,
    public noteService: NoteService
  ) {}

  public ngOnInit(): void {
    this.initNoteForm();
  }

  public onSubmit(): void {
    const text: string = this.noteForm.get('text')?.value;
    const tags: string = this.noteForm.get('tags')?.value;

    this.noteService.set(text);
  }

  private initNoteForm(): void {
    this.noteForm = this.formBuilder.group({
      text: new FormControl(''),
      tags: new FormControl(''),
    });
  }

  public add(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();

    // Add our fruit
    if (value) {
      this.fruits.push({name: value});
    }

    // Clear the input value
    event.chipInput!.clear();
  }

  public remove(fruit: Fruit): void {
    const index = this.fruits.indexOf(fruit);

    if (index >= 0) {
      this.fruits.splice(index, 1);
    }
  }

}
