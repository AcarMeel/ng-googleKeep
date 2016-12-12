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

    colorPalette : string[] = ['#ED217C', '#17BEBB', '#AA3E98', '#DBF4A7', '#CCFF66', '#FF6666'];

    // Model 
    newNote = {
        title: "",
        value: "",
        color: "#DB5ABA"
    }

    @Output() createNote = new EventEmitter(); // Event 

    // executed when submit. It's gonna fire the event 
    onCreateNote() {
        const { title, value, color } = this.newNote;
        if(title && value) {
            this.createNote.next({ title, value, color});
        }

        this.reset();
        this.toggle(false);
    }

    // clear the inputs
    reset() {
        this.newNote = {
            title: "",
            value: "",
            color: "#DB5ABA"
        };
    }


    toggle(value: boolean) {
        this.fullForm = value;
    }

    onColorSelect(color : string) {
        this.newNote.color = color;
    }
    
}