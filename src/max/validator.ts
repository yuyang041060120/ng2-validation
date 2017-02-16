import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../facade/lang';

export const max = (max: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!isPresent(max)) return null;
    if (isPresent(Validators.required(control))) return null;

    let v: number = +control.value;
    return v <= +max ? null : {max: true};
  };
};
