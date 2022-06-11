import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HeaderComponent } from './components/header/header.component';
import { TagsListComponent } from './components/tags-list/tags-list.component';
import { NotesListComponent } from './components/notes-list/notes-list.component';
import { NoteFormComponent } from './components/note-form/note-form.component';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { NoteCardComponent } from './components/note-card/note-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TagsListComponent,
    NotesListComponent,
    NoteFormComponent,
    NoteCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
