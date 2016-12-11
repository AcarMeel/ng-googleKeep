import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'note-card',
    templateUrl: 'app/ui/note-card.component.html',
    styleUrls: ['app/ui/note-card.component.css']
})

export class NoteCardComponent {
    @Input() noteInput = {};

    @Output() checked = new EventEmitter();

    showCheck: boolean = false;

    toggleCheck() {
        this.showCheck = !this.showCheck;
    }

    onChecked() {
        this.checked.next(this.noteInput);
    }
}