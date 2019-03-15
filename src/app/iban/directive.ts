import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { Iban } from './validator';

const IBAN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => IbanValidator),
  multi: true
};

@Directive({
  selector: '[iban][formControlName],[iban][formControl],[iban][ngModel]',
  providers: [IBAN_VALIDATOR]
})
export class IbanValidator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return Iban(c);
  }
}
