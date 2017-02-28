import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate } from '../facade/lang';

export const min = (min: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!isPresent(min)) return null;
    if (isPresent(Validators.required(control))) return null;
    if (isNaN(min) && isDate(new Date(min))) return null;

    let v: number = +control.value;
    return v >= +min ? null : {min: true};
  };
};
