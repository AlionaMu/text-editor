import { Injectable } from '@angular/core';
import { Note } from './../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  constructor() {}

  public get(item: string): any {
    const storage = localStorage.getItem(item);
    if (storage && storage.length !== 0) {
      return JSON.parse(storage);
    }
  }

  public set(key: string, value: string): any {
    localStorage.setItem(key, JSON.stringify(value));
  }
}
