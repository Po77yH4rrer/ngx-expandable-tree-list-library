import { TemplateRef } from '@angular/core';

export interface NgxExpandableListConfiguration {
  /**
   * Prevents collapsability of items with children and hides the collapse/expand button.
   * Default is false
   */
  preventCollapse?: boolean;
  listElevated?: boolean;
  hideIndexColumn?: boolean;
  headerOptions?: NgxExpandableListHeaderConfiguration;
  rowOptions?: NgxExpandableListRowConfiguration;
  columns?: Array<NgxExpandableListColumnConfiguration>;
}

interface NgxExpandableListColumnConfiguration {
  label: string;
  cellTemplate: TemplateRef<unknown>;
  textOverflow?: 'none' | 'hidden' | 'ellipsis';
}

interface NgxExpandableListHeaderConfiguration {
  hideListHeader?: boolean;
  preventResizing?: boolean;
  stickyHeader?: boolean;
}

interface NgxExpandableListRowConfiguration {
  stripedColors?: boolean;
}