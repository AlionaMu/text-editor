import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class TagsStorageService {
  public tagName: string = '';
  public tags: Tag[] = [];
  public allTagsList$: BehaviorSubject<any> = new BehaviorSubject(this.getAllTags());

  constructor() {}

  public getAllTags(): Tag[] {
    const tagsStorage: string | null = localStorage.getItem('tags');
    return tagsStorage ? this.setUniqueList(JSON.parse(tagsStorage)) : this.tags
  }

  public setNewTagToStorage(tags: Tag[]): void {
    const uniqueTags = this.setUniqueList(JSON.parse(JSON.stringify(tags)));
    const data = this.getAllTags();
    const resultTags = data.concat(uniqueTags);
    localStorage.setItem('tags', JSON.stringify(resultTags));
    this.allTagsList$.next(this.getAllTags());
  }

  public deleteTagFromStorage(name: string): void  {
    const data = this.getAllTags();
    const res = data.filter((item: { name: string; }) => item.name !== name);
    localStorage.setItem('tags', '[]');
    localStorage.setItem('tags', JSON.stringify(res));
    this.allTagsList$.next(this.getAllTags());
  }

  public setUniqueList(tags: Tag[]): any {
    let result = [...new Map(tags.map((item) => [item["name"], item])).values()];
    return result;
  }
}
