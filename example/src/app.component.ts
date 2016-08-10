import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { CustomValidators } from '../../src';

@Component({
    selector: 'app',
    template: require('./app.html')
})
export class AppComponent implements OnInit {
    form: FormGroup;

    constructor() {
    }

    ngOnInit() {
        var password = new FormControl('', Validators.required);
        var certainPassword = new FormControl('', CustomValidators.equalTo(password));

        this.form = new FormGroup({
            password: password,
            certainPassword: certainPassword
        });
    }

    onSubmit() {
        console.log(this.form);
    }

}