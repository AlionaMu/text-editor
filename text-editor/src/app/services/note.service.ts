import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Note } from './../models/note.model';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  constructor(public storageService: StorageService) {}

  public get(): Note[] {
    return this.storageService.get();
  }

  public set(text: string): void {
    this.storageService.set(text);
  }
}
