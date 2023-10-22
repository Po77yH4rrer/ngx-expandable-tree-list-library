import { Directive, ElementRef, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[ngxEtlResize]'
})
export class NgxEtlResizeDirective implements OnInit {
  @Input('ngxEtlResize') public resizable = true;
  @Input() public index = 0;

  private pressed = false;
  private column: HTMLElement;
  private table?: HTMLElement;

  constructor(private renderer: Renderer2, private elementRef: ElementRef) {
    this.column = this.elementRef.nativeElement;
  }

  ngOnInit() {
    if (this.resizable) {
      const row = this.renderer.parentNode(this.column);
      const thead = this.renderer.parentNode(row);
      this.table = this.renderer.parentNode(thead);

      const resizer = this.renderer.createElement('span');
      this.renderer.addClass(resizer, 'etl-resize-holder');
      this.renderer.appendChild(this.column, resizer);
      this.renderer.listen(resizer, 'mousedown', this.onMouseDown);
      this.renderer.listen(this.table, 'mousemove', this.onMouseMove);
      this.renderer.listen('document', 'mouseup', this.onMouseUp);
    }
  }

  private onMouseDown = (_: MouseEvent) => {
    this.pressed = true;
  };

  private onMouseMove = (event: MouseEvent) => {
    if (this.pressed && event.buttons && this.table) {
      this.renderer.addClass(this.table, 'etl-resizing');

      const { width, right } = this.elementRef.nativeElement
        .getBoundingClientRect();

      const colWidth = width + event.clientX - right;

      const tableCells = Array.from(this.table.querySelectorAll('.etl-expandable-tree-head-row')).map(
        (row: any) => row.querySelectorAll('td').item(this.index)
      );

      try {
        this.renderer.setStyle(this.column, 'width', `${colWidth}px`);

        tableCells.forEach((cell) => {
          this.renderer.setStyle(cell, 'width', `${colWidth}px`);
        });
      } catch {
        // This catches the exception 'TypeError: Cannot read properties of null (reading 'style') on the table cells'
      }
    }
  };

  private onMouseUp = (_: MouseEvent) => {
    if (this.pressed) {
      this.pressed = false;
      this.renderer.removeClass(this.table, 'etl-resizing');
    }
  };
}
