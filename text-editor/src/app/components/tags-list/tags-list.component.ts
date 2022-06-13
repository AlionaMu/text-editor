import { Component, OnInit } from '@angular/core';
import { Tag } from './../../models/tag.model';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { TagsStorageService } from 'src/app/services/tags-storage.service';

@Component({
  selector: 'app-tags-list',
  templateUrl: './tags-list.component.html',
  styleUrls: ['./tags-list.component.scss']
})
export class TagsListComponent implements OnInit {
  public addOnBlur = true;
  public readonly separatorKeysCodes = [ENTER, COMMA] as const;
  public tags: Tag[] = [];
  public isFiltered: boolean = false;

  constructor(
    private tagsStorageService: TagsStorageService,
  ) { }

  ngOnInit(): void {
    this.tagsStorageService.allTagsList$.subscribe((data: any) => {
      this.tags = data;
    })
  }

  public addTag(event: MatChipInputEvent): void {
    const value = (event.value || '').trim();
    if (value) {
      this.tags.push({name: value});
    }
    event.chipInput!.clear();
  }

  public removeTag(tag: Tag): void {
    const index = this.tags.indexOf(tag);
    if (index >= 0) {
      this.tags.splice(index, 1);
    }
    this.tagsStorageService.deleteTagFromStorage(tag.name);
  }

  public addFiltering(tag: Tag): void {
    this.tagsStorageService.tagName = tag.name;
    this.isFiltered = true;
  }

  public cancelFilters() {
    this.isFiltered = false;
    this.tagsStorageService.tagName = '';
  }
}
