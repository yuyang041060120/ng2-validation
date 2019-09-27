import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isDate, isPresent, parseDate } from '../util/lang';

export const date: ValidatorFn = (control: AbstractControl): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  let v: string = control.value;
  v = parseDate(v);
  return isDate(v) ? null : { date: true };
};
