import { bootstrap }      from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './src/app.component';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
]).catch(err => console.error(err));