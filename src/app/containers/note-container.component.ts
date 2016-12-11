import { Component} from '@angular/core';

@Component({
    selector: 'note-container',
    templateUrl: 'app/containers/note-container.component.html',
    styleUrls: ['app/containers/note-container.component.css']
})

export class NoteContainerComponent {
    title: string = 'Note creator here';
    notes = [
    {
        title: 'First Note', 
        value: 'Initial note',
        color: '#FAB2EA'
    },
    {
        title: '2nd Note', 
        value: 'Initial note',
        color: '#FFAD05'
    },
    {
        title: '3rd Note', 
        value: 'Initial note',
        color: '#00CECB'
    },
    {
        title: '4th Note', 
        value: 'Initial note',
        color: '#FE938C'
    },
    {
        title: '5th Note', 
        value: 'Initial note',
        color: '#6CD4FF'
    }
    ];

    onNoteChecked(i: number) {
        this.notes.splice(i,1);
    }

    // Print the note to the html
    onCreateNotes(note) {
        this.notes.push(note);
        console.log(this.notes, note);
    }
}