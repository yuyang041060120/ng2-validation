import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const lte = (lte: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!lte) return null;
    if (!isPresent(lte)) return null;
    if (isPresent(Validators.required(control))) return null;

    let v: number = +control.value;
    return v <= +lte ? null : {lte: true};
  };
};
