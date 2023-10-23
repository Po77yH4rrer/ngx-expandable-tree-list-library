import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgxExpandableTreeListModule } from 'ngx-expandable-tree-list';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, NgxExpandableTreeListModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
