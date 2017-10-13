import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate, parseDate } from '../util/lang';

export const minDate = (value: any): ValidatorFn => {

  value = parseDate(value);

  if (!isDate(value) && !(value instanceof Function)) {
    throw Error('minDate value must be or return a formatted date');
  }

  return (control: AbstractControl): {[key: string]: any} => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const d = new Date(control.value).getTime();

    if (!isDate(d)) {
      return { value: true };
    }
    if (value instanceof Function) {
      value = value();
    }

    return d >= new Date(value).getTime() ? null : { minDate: true };
  };
};
