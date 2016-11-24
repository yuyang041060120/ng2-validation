import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const BASE64_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => Base64Validator),
  multi: true
};

@Directive({
  selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
  providers: [BASE64_VALIDATOR]
})
export class Base64Validator implements Validator {
  validate(c: AbstractControl): {[key: string]: any} {
    return CustomValidators.base64(c);
  }
}