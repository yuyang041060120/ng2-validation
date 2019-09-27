import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { CustomFormsModule } from '../app/custom-forms.module';
import { DevComponent } from './dev.component';

const routes: Routes = [
  {
      path: '',
      component: DevComponent,
  }
];

@NgModule({
  imports: [
    BrowserModule,
    CustomFormsModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes)
  ],
  declarations: [DevComponent],
  bootstrap: [DevComponent]
})

export class DevModule { }
