import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const max = (value: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: number = +control.value;
    return v <= +value ? null : {actualValue: v, requiredValue: +value, max: true};
  };
};
