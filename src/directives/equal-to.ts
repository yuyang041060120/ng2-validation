import { Directive, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, FormGroup, NgModelGroup } from '@angular/forms';

import { CustomValidators } from '../index';

const EQUAL_TO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => EqualToValidator),
  multi: true
};

@Directive({
  selector: '[equalTo][ngModelGroup]',
  providers: [EQUAL_TO_VALIDATOR]
})
export class EqualToValidator implements Validator {
  validate(c: FormGroup): {[key: string]: any} {
    return CustomValidators.equalTo(c);
  }
}