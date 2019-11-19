import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { wholeNumber } from './';

const WHOLE_NUMBER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => WholeNumberValidator),
  multi: true
};

@Directive({
  selector: '[wholeNumber][formControlName],[wholeNumber][formControl],[wholeNumber][ngModel]',
  providers: [WHOLE_NUMBER_VALIDATOR]
})
export class WholeNumberValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return wholeNumber(c);
  }
}
