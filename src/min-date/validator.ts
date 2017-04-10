import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate } from '../util/lang';

export const minDate = (minDate: any): ValidatorFn => {

  if (!isDate(minDate) && !(minDate instanceof Function)) {
    throw Error('minDate value must be or return a formatted date');
  }

  return (control: AbstractControl): {[key: string]: any} => {
    if (isPresent(Validators.required(control))) return null;

    let d: Date = new Date(control.value);

    if (!isDate(d)) return {minDate: true};
    if (minDate instanceof Function) minDate = minDate();

    return d >= new Date(minDate) ? null : {minDate: true};
  };
};
