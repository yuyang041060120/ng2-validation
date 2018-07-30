import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate, parseDate } from '../util/lang';

export const date: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  let v: string = control.value;
  v = parseDate(v);
  return isDate(v) ? null : {date: true};
};
