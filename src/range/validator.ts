import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const range = (range: Array<number>): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!isPresent(range)) return null;
    if (isPresent(Validators.required(control))) return null;

    let v: number = +control.value;
    return v >= range[0] && v <= range[1] ? null : {actualValue: v, requiredValue: range, range: true};
  };
};
