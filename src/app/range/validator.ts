import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const range = (value: Array<number>): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: number = +control.value;
    return v >= value[0] && v <= value[1] ? null : {actualValue: v, requiredValue: value, range: true};
  };
};
