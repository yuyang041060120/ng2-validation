import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const NUMBER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NumberValidator),
  multi: true
};

@Directive({
  selector: '[number][formControlName],[number][formControl],[number][ngModel]',
  providers: [NUMBER_VALIDATOR]
})
export class NumberValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return CustomValidators.number(c);
  }
}