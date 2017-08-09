import { Component } from '@angular/core';
import { FormLineComponent } from "angularm";

@Component({
    selector: 'div [mgFormLine]',
    template:
        `<label for="{{propertyType.entityType.singular}}_status"
            >{{propertyType.name | titleCase}}</label>
        <datalist id="{{propertyType.entityType.singular}}_status_list">
        <option value="Open">
        <option value="Closed">
        <option value="On going">
        <option value="Review">
        <option value="Cancelled">
        </datalist>
        <input [attr.list]="propertyType.entityType.singular+'_status_list'" id="{{propertyType.entityType.singular}}_status">`
})
export class StatusComponent extends FormLineComponent { }