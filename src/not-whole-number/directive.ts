import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { notWholeNumber } from './';

const NOT_WHOLE_NUMBER_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => NotWholeNumberValidator),
  multi: true
};

@Directive({
  selector: '[notWholeNumber][formControlName],[notWholeNumber][formControl],[notWholeNumber][ngModel]',
  providers: [NOT_WHOLE_NUMBER_VALIDATOR]
})
export class NotWholeNumberValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return notWholeNumber(c);
  }
}
