import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate } from '../facade/lang';

export const date: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) return null;

  let v: string = control.value;
  return isDate(v) ? null : {date: true};
};
