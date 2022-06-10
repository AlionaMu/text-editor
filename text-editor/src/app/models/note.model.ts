export class Note {
  id: string;
  text: string;
  //tags: string[];

  constructor(id: string, text: string/*, tags: string[]*/) {
    this.id = id;
    this.text = text;
    //this.tags = tags;
  }
}
