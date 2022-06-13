import { Injectable } from '@angular/core';
import { Note } from '../models/note.model';
import { Tag } from '../models/tag.model';
import { StorageService } from './storage.service';
import { TagsStorageService } from './tags-storage.service';

@Injectable({
  providedIn: 'root',
})
export class NoteService {

  constructor(public storageService: StorageService, public tagsStorageService: TagsStorageService) {}

  public get(): Note[] {
    return this.storageService.get();
  }

  public set(text: string, tags: Tag[]): void {
    this.storageService.set(text, tags);
    this.tagsStorageService.setNewTagToStorage(tags);
  }
}
