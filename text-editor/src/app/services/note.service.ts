import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { StorageService } from './storage.service';

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
