import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const JSON_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => JSONValidator),
  multi: true
};

@Directive({
  selector: '[json][formControlName],[json][formControl],[json][ngModel]',
  providers: [JSON_VALIDATOR]
})
export class JSONValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return CustomValidators.json(c);
  }
}