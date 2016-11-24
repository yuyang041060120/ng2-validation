import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const DATE_ISO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => DateISOValidator),
  multi: true
};

@Directive({
  selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
  providers: [DATE_ISO_VALIDATOR]
})
export class DateISOValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return CustomValidators.dateISO(c);
  }
}