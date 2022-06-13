import { Injectable } from '@angular/core';
import { Tag } from '../models/tag.model';

@Injectable({
  providedIn: 'root',
})
export class FindHashService {

  constructor() {}

  public findByHash(text: string): Tag[] {
    let tagsArr = [];
    let regexp = new RegExp('#([^\\s]*)', 'g');
    let tmplist = text.match(regexp);
    for (let w in tmplist) {
      let hashSub = tmplist[+w].split('#');
      for (let x in hashSub) {
        if (hashSub[x] != "")
        {
          if (hashSub[x].substr(hashSub[x].length - 1) == ":")
          {
            hashSub[x] = hashSub[x].slice(0, -1);
          }
          if (hashSub[x] != "") {
            let resultWord: string = `${hashSub[x]}`;
            tagsArr.push(new Tag(resultWord));
          }
        }
      }
    }
    return tagsArr;
  }
}
