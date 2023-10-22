export type NgxExpandableListData<T> = NgxExpandableListItem<T>[];

export interface NgxExpandableListItem<T> {
  [key: string]: unknown;
  children?: Array<NgxExpandableListItem<T>>;
}

export interface NgxExpandableFlatListItem {
  index: string;
  hasChildren: boolean;
  parentIndex?: string;
  [key: string]: unknown;
}