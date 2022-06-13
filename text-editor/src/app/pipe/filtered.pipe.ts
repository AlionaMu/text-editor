import { Pipe, PipeTransform } from "@angular/core";
import { Note } from "../models/note.model";

@Pipe({
  name: 'filtered'
})
export class FilteredPipe implements PipeTransform {
  public transform(cards: Note[], tag: string): Note[]{
    if (tag) {
      const filtered: Note[] = [];
      cards.forEach((note: Note) => {
        note?.tags.forEach(currentTag => {
          if (tag === currentTag.name) {
            filtered.push(note);
          }
        })
      })
      return filtered;
    }
    return cards;
  }
}
