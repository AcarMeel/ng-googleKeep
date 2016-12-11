import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app';
import { MainContainerComponent, NoteContainerComponent } from './app/containers';
import { AppBarComponent, NoteCardComponent, NoteCreatorComponent } from './app/ui';



@NgModule({
    declarations: [ 
        AppComponent, MainContainerComponent, 
        AppBarComponent, NoteCardComponent, 
        NoteContainerComponent, NoteCreatorComponent 
    ],
    imports: [BrowserModule, FormsModule ],
    bootstrap: [AppComponent]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);