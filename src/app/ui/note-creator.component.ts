import { Component, Output, EventEmitter } from '@angular/core';

@Component({
    moduleId: "module.id",
    selector: 'note-creator',
    templateUrl: 'app/ui/note-creator.component.html',
    styleUrls: ['app/ui/note-creator.component.css']
})

export class NoteCreatorComponent {
    pageTitle: string = 'Note card here';

    fullForm: boolean = false;

    // Model 
    newNote = {
        title: "",
        value: ""
    }

    @Output() createNote = new EventEmitter(); // Event 

    // executed when submit. It's gonna fire the event 
    onCreateNote() {
        const { title, value } = this.newNote;
        if(title && value) {
            this.createNote.next({ title, value});
        }

        this.reset();
        this.toggle(false);
    }

    // clear the inputs
    reset() {
        this.newNote = {
            title: "",
            value: ""
        };
    }


    toggle(value: boolean) {
        this.fullForm = value;
    }
}