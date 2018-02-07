import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppComponent } from './app.component';
import { LayoutHeaderComponent } from './layout/header.component';
import { LayoutSidenavComponent } from './layout/sidenav-component';
import { BasicExample } from './examples/basic-example';
import { CustomFormsModule } from '@ng-validators/ng-validators';

const appRoutes: Routes = [
    {
        path: '',
        redirectTo: '/basic',
        pathMatch: 'full'
    },
    { path: 'basic', component: BasicExample, data: { title: 'Basic example' } },
];

@NgModule({
    imports: [
        BrowserModule,
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        CustomFormsModule,
        HttpClientModule,
        NgbModule.forRoot(),
        RouterModule.forRoot(
            appRoutes,
            {
                useHash: true
            }
        )
    ],
    declarations: [
        AppComponent,
        BasicExample,
        LayoutHeaderComponent,
        LayoutSidenavComponent,

    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}

