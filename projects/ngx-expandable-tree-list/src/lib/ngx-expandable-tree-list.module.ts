import { ScrollingModule } from '@angular/cdk/scrolling';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './components/list/list.component';
import { NgxEtlResizeDirective } from './directives/ngx-etl-resize.directive';

@NgModule({
  declarations: [
    ListComponent,
    NgxEtlResizeDirective,
  ],
  imports: [CommonModule, ScrollingModule],
  exports: [
    ListComponent,
    NgxEtlResizeDirective,
  ]
})
export class NgxExpandableTreeListModule { }
