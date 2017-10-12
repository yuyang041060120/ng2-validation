import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate } from '../util/lang';

export const maxDate = (maxDate: any): ValidatorFn => {
  if (!isDate(maxDate) && !(maxDate instanceof Function)) {
    throw Error('maxDate value must be or return a formatted date');
  }

  return (control: AbstractControl): {[key: string]: any} => {
    if (isPresent(Validators.required(control))) return null;

    let d: Date = new Date(control.value);

    if (!isDate(d)) return {maxDate: true};
    if (maxDate instanceof Function) maxDate = maxDate();

    return d <= new Date(maxDate) ? null : {maxDate: true};
  };
};
