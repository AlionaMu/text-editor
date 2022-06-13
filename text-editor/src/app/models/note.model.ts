import { Tag } from "./tag.model";

export class Note {
  id: string;
  text: string;
  tags: Tag[];

  constructor(id: string, text: string, tags: Tag[]) {
    this.id = id;
    this.text = text;
    this.tags = tags;
  }
}
