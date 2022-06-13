import { Injectable } from '@angular/core';
import { Note } from './../models/note.model';
import { BehaviorSubject } from 'rxjs';
import { Tag } from '../models/tag.model';
import { FindHashService } from './find-hash.service';
import { TagsStorageService } from './tags-storage.service';

@Injectable({
  providedIn: 'root',
})
export class StorageService {
  public notes: Note[] = [];
  public data$: BehaviorSubject<any> = new BehaviorSubject(this.get());

  constructor(
    public findHashService: FindHashService,
    public tagsStorageService: TagsStorageService
    ) {}

  public get(): Note[] {
    const storage: string | null = localStorage.getItem('notes');
    return storage ? JSON.parse(storage) : this.notes
  }

  public set(text: string, tags: Tag[]): void {
    const data = this.get();
    const newNote: Note = new Note(data.length.toString(), text, tags)
    data.push(newNote);
    localStorage.setItem('notes', JSON.stringify(data));
    this.data$.next(this.get());
  }

  public editNote(text: string, id: string)  {
    const data = this.get();
    const index = data.findIndex((item: Note) => item.id === id);
    const newTags = this.findHashService.findByHash(text);
    const uniqueTags = this.tagsStorageService.setUniqueList(data[index].tags.concat(newTags));
    data[index].text = text;
    data[index].tags = uniqueTags;
    localStorage.setItem('notes', '[]');
    localStorage.setItem('notes', JSON.stringify(data));
    this.data$.next(this.get());
    this.tagsStorageService.setNewTagToStorage(newTags);
  }

  public deleteNote(id: string): void  {
    const data = this.get();
    const res = data.filter((item: { id: string; }) => item.id !== id);
    localStorage.clear();
    localStorage.setItem('notes', JSON.stringify(res));
    this.data$.next(this.get());
  }
}
