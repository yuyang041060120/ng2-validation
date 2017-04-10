import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const gte = (gte: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!isPresent(gte)) return null;
    if (isPresent(Validators.required(control))) return null;

    let v: number = +control.value;
    return v >= +gte ? null : {gte: true};
  };
};
