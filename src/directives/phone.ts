import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const PHONE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PhoneValidator),
  multi: true
};

@Directive({
  selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
  providers: [PHONE_VALIDATOR]
})
export class PhoneValidator implements Validator, OnInit {
  @Input() phone: string;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = CustomValidators.phone(this.phone);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
