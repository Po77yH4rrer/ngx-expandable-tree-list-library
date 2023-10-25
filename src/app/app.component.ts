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
  @ViewChild('oneTemplate', { static: true })
  public oneTemplate!: TemplateRef<unknown>;
  @ViewChild('twoTemplate', { static: true })
  public twoTemplate!: TemplateRef<unknown>;
  @ViewChild('threeTemplate', { static: true })
  public threeTemplate!: TemplateRef<unknown>;
  @ViewChild('fourTemplate', { static: true })
  public fourTemplate!: TemplateRef<unknown>;
  @ViewChild('fiveTemplate', { static: true })
  public fiveTemplate!: TemplateRef<unknown>;
  @ViewChild('sixTemplate', { static: true })
  public sixTemplate!: TemplateRef<unknown>;
  @ViewChild('sevenTemplate', { static: true })
  public sevenTemplate!: TemplateRef<unknown>;
  @ViewChild('eightTemplate', { static: true })
  public eightTemplate!: TemplateRef<unknown>;
  @ViewChild('nineTemplate', { static: true })
  public nineTemplate!: TemplateRef<unknown>;
  @ViewChild('tenTemplate', { static: true })
  public tenTemplate!: TemplateRef<unknown>;
  @ViewChild('elevenTemplate', { static: true })
  public elevenTemplate!: TemplateRef<unknown>;
  @ViewChild('twelveTemplate', { static: true })
  public twelveTemplate!: TemplateRef<unknown>;
  @ViewChild('thirteenTemplate', { static: true })
  public thirteenTemplate!: TemplateRef<unknown>;
  @ViewChild('fourteenTemplate', { static: true })
  public fourteenTemplate!: TemplateRef<unknown>;
  @ViewChild('fifteenTemplate', { static: true })
  public fifteenTemplate!: TemplateRef<unknown>;

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
        {
          label: 'One',
          cellTemplate: this.oneTemplate,
        },
        {
          label: 'Two',
          cellTemplate: this.twoTemplate,
        },
        {
          label: 'Three',
          cellTemplate: this.threeTemplate,
        },
        {
          label: 'Four',
          cellTemplate: this.fourTemplate,
        },
        {
          label: 'Five',
          cellTemplate: this.fiveTemplate,
        },
        {
          label: 'Six',
          cellTemplate: this.sixTemplate,
        },
        {
          label: 'Seven',
          cellTemplate: this.sevenTemplate,
        },
        {
          label: 'Eight',
          cellTemplate: this.eightTemplate,
        },
        {
          label: 'Nine',
          cellTemplate: this.nineTemplate,
        },
        {
          label: 'Ten',
          cellTemplate: this.tenTemplate,
        },
        {
          label: 'Eleven',
          cellTemplate: this.elevenTemplate,
        },
        {
          label: 'Twelve',
          cellTemplate: this.twelveTemplate,
        },
        {
          label: 'Thirteen',
          cellTemplate: this.thirteenTemplate,
        },
        {
          label: 'Fourteen',
          cellTemplate: this.fourteenTemplate,
        },
        {
          label: 'Fifteen',
          cellTemplate: this.fifteenTemplate,
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
                title: `First level child of first level child of 'Child ${
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
