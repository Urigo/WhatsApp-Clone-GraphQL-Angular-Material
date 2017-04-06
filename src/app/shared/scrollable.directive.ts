import { Directive, Renderer, ElementRef, AfterContentInit } from '@angular/core';

@Directive({
  selector: '[appScrollable]'
})
export class ScrollableDirective implements AfterContentInit {
  constructor(
    private renderer: Renderer,
    private element: ElementRef,
  ) {}

  ngAfterContentInit() {
    this.renderer.setElementStyle(this.element.nativeElement, 'flex', '1 1 auto');
    this.renderer.setElementStyle(this.element.nativeElement, 'overflow-y', 'auto');
    this.renderer.setElementStyle(this.element.nativeElement, 'min-height', '0px');
  }

  scrollToBottom() {
    this.element.nativeElement.scrollTop = this.element.nativeElement.scrollHeight;
  }
}
