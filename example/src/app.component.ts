import { Component, OnInit } from '@angular/core';
import {
    ValidatorFn,
    AbstractControl,
    Validators,
    FormGroup,
    REACTIVE_FORM_DIRECTIVES,
    FormControl
} from '@angular/forms';

import { CUSTOM_FORM_DIRECTIVES } from '../../src';

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [REACTIVE_FORM_DIRECTIVES, CUSTOM_FORM_DIRECTIVES]
})
export class AppComponent implements OnInit {
    constructor() {
    }

    ngOnInit() {
        // this.form = new FormGroup({
        //     username: new FormControl('', Validators.compose([CustomValidators.number]))
        // });
    }

    onSubmit(form) {
        console.log(form);
    }

}