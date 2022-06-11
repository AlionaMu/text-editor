import { Injectable } from '@angular/core';
import { Note } from './../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public notes: Note[] = [];

  constructor() {}

  public get(): Note[] {
    const storage: string | null = localStorage.getItem('notes');
    return storage ? JSON.parse(storage) : this.notes
  }

  public set(text: string): void {
      const data = this.get();
      const newNote: Note = new Note(data.length.toString(), text)
      data.push(newNote);
      localStorage.setItem('notes', JSON.stringify(data));
  }

  public editNote(text: string, id: string)  {
    const data = this.get();
  }

  public deleteNote(id: string)  {
    const data = this.get();
    const res = data.filter(item => item.id !== id);
    console.log(res)
  }
}
