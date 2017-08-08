import { Component, OnInit, ViewChild } from '@angular/core';

import { PropertyComponent } from 'angularm';

@Component({
    selector: 'td [mgTableCell]',
    template:
        `<div [ngClass]="configuration.propertyClass">{{property.value}}</div>`,
})
export class TableCellComponent extends PropertyComponent { }
