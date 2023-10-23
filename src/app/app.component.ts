import { Component, OnInit, TemplateRef, ViewChild } from '@angular/core';
import {
  NgxExpandableListConfiguration,
  NgxExpandableListData,
} from 'ngx-expandable-tree-list';

interface DataObject {
  title: string;
  createdAt: string;
  createdBy: string;
}

@Component({
  selector: 'ngx-etl-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  @ViewChild('titleTemplate', { static: true })
  public titleTemplate!: TemplateRef<unknown>;
  @ViewChild('createdAtTemplate', { static: true })
  public createdAtTemplate!: TemplateRef<unknown>;
  @ViewChild('createdByTemplate', { static: true })
  public createdByTemplate!: TemplateRef<unknown>;

  public configuration: NgxExpandableListConfiguration = {};
  public mockData: NgxExpandableListData<DataObject> = [];

  ngOnInit(): void {
    this.initTableConfig();
    this.initTableData(500);
  }

  private initTableConfig() {
    this.configuration = {
      hideIndexColumn: false,
      listElevated: true,
      preventCollapse: false,
      rowOptions: {
        stripedColors: true,
      },
      headerOptions: {
        hideListHeader: false,
        preventResizing: false,
        stickyHeader: true,
      },
      columns: [
        {
          label: 'Title',
          cellTemplate: this.titleTemplate,
        },
        {
          label: 'Created At',
          cellTemplate: this.createdAtTemplate,
        },
        {
          label: 'Created By',
          cellTemplate: this.createdByTemplate,
        },
      ],
    };
  }

  private initTableData(amount: number) {
    let i = 0;

    this.mockData.push({
      title: `Child ${i + 1}`,
      createdAt: new Date().toUTCString(),
      createdBy: 'Me',
      children: [
        {},
        { children: [{}, {}, {}] },
        {
          children: [
            {},
            {},
            {
              children: [
                {},
                {},
                { children: [{ children: [{}, {}, {}] }, {}, {}] },
              ],
            },
          ],
        },
      ],
    });

    while (i < amount) {
      let creator = 'Me';

      if (Math.random() > 0.5) {
        creator = 'Someone else';
      }

      this.mockData.push({
        title: `Child ${i + 2}`,
        createdAt: new Date().toUTCString(),
        createdBy: creator,
        children: [
          {
            title: `First level child of 'Child ${i + 2}'`,
            createdAt: new Date().toUTCString(),
            createdBy: creator,
            children: [
              {
                title: `First level child of first level child of'Child ${
                  i + 2
                }'`,
                createdAt: new Date().toUTCString(),
                createdBy: creator,
              },
            ],
          },
          {
            title: `Second first level child of 'Child ${i + 2}'`,
            createdAt: new Date().toUTCString(),
            createdBy: creator,
          },
        ],
      });

      i++;
    }
  }
}
