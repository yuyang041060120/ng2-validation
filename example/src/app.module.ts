import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}