import { Component, OnInit } from '@angular/core';
import { Validators, FormControl, FormGroup } from '@angular/forms';

import { CustomValidators } from '../app/index';

@Component({
  selector: 'dev',
  templateUrl: 'dev.component.html',
  styleUrls: ['dev.component.less']
})
export class DevComponent implements OnInit {
  public form: FormGroup;
  public num = 5;

  ngOnInit() {
    const password = new FormControl('', Validators.required);
    const certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

    this.form = new FormGroup({
      password: password,
      certainPassword: certainPassword
    });
  }

  onSubmit(form) {
    console.log(form);
  }
}
