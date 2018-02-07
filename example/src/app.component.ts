import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { CustomValidators } from '../../src';

@Component({
  selector: 'app',
  template: require('./app.html'),
  styles: [require('./app.less')]
})
export class AppComponent implements OnInit {
  form: FormGroup;
  num: number = 5;
  minDateFrom = new Date();

  ngOnInit() {
    let password = new FormControl('', Validators.required);
    let certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

    this.form = new FormGroup({
      password: password,
      certainPassword: certainPassword
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}
