# Integration

To integrate the libraries assets into your application update your projects `angular.json` as follows

```json
...
"assets": [
  {
    "glob": "**/*",
    "input": "./node_modules/ngx-expandable-tree-list/assets",
    "output": "/assets/"
  },
  ...
],
...
```

# Styling

Variables to override are:

```scss
:root {
  --etl-row-hover-color: #e9e9e9;
  --etl-odd-row-background-color: #f2f2f2;
  --etl-even-row-background-color: #ffffff;
  --etl-header-row-color: #f2f2f2;
  --etl-depth-indent: 2px;
}
```

# IMPORTANT NOTES:

The `config` parameter has to be initialized at the earliest OnInit of your component. This is because the TemplateRefs will be undefined otherwise when they are passed on to the list component and will therefore not be rendered.

```ts
export class MyComponent implements OnInit {
  @ViewChild('titleTemplate', { static: true }) public titleTemplate!: TemplateRef<unknown>;

  public listConfig: NgxExpandableListConfiguration = {};
  public data: NgxExpandableListData<any> = [];

  ...

  ngOnInit(): void {
    this.listConfig = {
      columns: [
        {
          label: 'Name',
          cellTemplate: this.titleTemplate,
        },
        /*Put your other column definitions here*/
      ],
    };
  }
}
```
```html
<ngx-etl-list [data]="data" [config]="listConfig"></ngx-etl-list>

<ng-template #titleTemplate let-item>
  {{ item.title }}
</ng-template>
```
