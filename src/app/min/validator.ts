import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const min = (min: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {
    if (!isPresent(min)) return null;
    if (isPresent(Validators.required(control))) return null;

    let v: number = +control.value;
    return v >= +min ? null : {actualValue: v, requiredValue: +min, min: true};
  };
};
