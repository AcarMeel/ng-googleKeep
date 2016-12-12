import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: "module.Id",
    selector: "color-picker",
    templateUrl: 'app/ui/color-picker.component.html',
    styleUrls: ['app/ui/color-picker.component.css']
})


export class ColorPickerComponent {
    @Input() colors : string[] = [];

    @Output() selected = new EventEmitter();

    isSelectorVisible: boolean = false;

    selectColor(color: string) {
        this.selected.next(color);
        this.showSelector(false);
    }

    showSelector(value: boolean) {
        this.isSelectorVisible = value;
    }

}