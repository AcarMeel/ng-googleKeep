import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent, providers } from './app';
import { MainContainerComponent, NoteContainerComponent } from './app/containers';
import { AppBarComponent, NoteCardComponent, NoteCreatorComponent, ColorPickerComponent } from './app/ui';



@NgModule({
    declarations: [ 
        AppComponent, MainContainerComponent, 
        AppBarComponent, NoteCardComponent, 
        NoteContainerComponent, NoteCreatorComponent,
        ColorPickerComponent
    ],
    providers,
    imports: [BrowserModule, FormsModule, HttpModule ],
    bootstrap: [AppComponent]
})

export class AppModule {}

platformBrowserDynamic().bootstrapModule(AppModule);