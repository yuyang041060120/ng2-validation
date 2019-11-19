import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const wholeNumber: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) return null;

  let v: number = Number(control.value);
  return v % 1 !== 0 ? null : {'wholeNumber': true};
};
