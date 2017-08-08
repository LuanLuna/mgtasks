import { Component } from '@angular/core';

import { PropertyTypeComponent } from 'angularm';

@Component({
    selector: 'th [mgTableHeader]',
    template:
        `<div [ngClass]="configuration.propertyClass">{{propertyType.name | titleCase}}</div>`,
})
export class TableHeaderComponent extends PropertyTypeComponent { }
