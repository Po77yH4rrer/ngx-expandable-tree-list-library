import { CdkVirtualScrollViewport } from '@angular/cdk/scrolling';
import { Component, Input, ViewChild } from '@angular/core';
import {
  NgxExpandableFlatListItem,
  NgxExpandableListConfiguration,
  NgxExpandableListData,
  NgxExpandableListItem,
} from '../../models';

@Component({
  selector: 'ngx-etl-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  @ViewChild(CdkVirtualScrollViewport, { static: false })
  public viewPort?: CdkVirtualScrollViewport;

  @Input()
  public get data(): NgxExpandableListData<unknown> {
    return this._data;
  }
  public set data(value: NgxExpandableListData<unknown>) {
    this._data = value;
    this.initializeDatasource();
  }

  @Input() public config?: NgxExpandableListConfiguration;

  public get invertedScrollTranslation(): string {
    if (!this.viewPort) {
      return '-0px';
    }
    const offset = this.viewPort.getOffsetToRenderedContentStart();

    return `-${offset}px`;
  }

  public get itemSize(): number {
    return document.getElementById('etl-data-row')?.clientHeight || 48;
  }

  public collapsed: { [index: string]: boolean } = {};
  public flatDataSource: Array<NgxExpandableFlatListItem> = [];

  private _data: NgxExpandableListData<unknown> = [];

  public toggleCollapseState(index: string) {
    if (this.config?.preventCollapse) {
      return;
    }

    if (this.collapsed[index]) {
      delete this.collapsed[index];
    } else {
      this.collapsed[index] = true;
    }
  }

  public isChildOfCollapsedElement(index?: string) {
    if (this.config?.preventCollapse || !index) {
      return false;
    }

    const collapsedKeys = Object.keys(this.collapsed);

    return Boolean(
      collapsedKeys.find(
        (x) => index.toString() == x || index.toString().startsWith(`${x}.`)
      )
    );
  }

  private initializeDatasource() {
    const copiedData = [...this.data];

    copiedData.forEach((item, index) => {
      this.flatDataSource.push(
        this.createFlatItem(item, (index + 1).toString())
      );
    });

    this.flatDataSource.sort((a, b) =>
      a.index.localeCompare(b.index, undefined, {
        numeric: true,
        sensitivity: 'base',
      })
    );
  }

  private createFlatItem(
    item: NgxExpandableListItem<unknown>,
    index: string,
    parentIndex?: string
  ): NgxExpandableFlatListItem {
    const itemIndex = parentIndex ? parentIndex + '.' + index : index;

    item.children?.forEach((child, i) => {
      this.flatDataSource.push(
        this.createFlatItem(child, (i + 1).toString(), itemIndex)
      );
    });

    const hasChildren = Boolean(item.children && item.children.length > 0);

    delete item.children;

    return {
      ...item,
      index: itemIndex,
      parentIndex: parentIndex,
      hasChildren: hasChildren,
      depth: [...itemIndex].filter((char) => char === '.')?.length,
    };
  }
}
