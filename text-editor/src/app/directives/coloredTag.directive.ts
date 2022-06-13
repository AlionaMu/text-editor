import { Directive, Input, OnInit, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[coloredTag]'
})
export class ColoredTagDirective implements OnInit {
  @Input('coloredTag') public text: string | undefined;

  constructor(private elementRef: ElementRef, private renderer2: Renderer2) { }

  private setColor(): void {
    let color: string = 'red';
    let regexp = new RegExp('#([^\\s]*)', 'g');
    let coloredList = this.text?.match(regexp);
    this.renderer2.setStyle(this.elementRef.nativeElement, 'color', `${color}`);
  }

  public ngOnInit(): void {
    this.setColor();
  }
}
