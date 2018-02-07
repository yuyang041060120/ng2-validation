import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate } from '../util/lang';

export const minDate = (minDate: any | AbstractControl): ValidatorFn => {
  let subscribe: boolean = false;
  let otherValue = minDate;
  const subscribable = minDate instanceof AbstractControl;
  if (!subscribable && !isDate(minDate) && !(minDate instanceof Function)) {
    throw Error('minDate value must be or return a formatted date');
  }

  return (control: AbstractControl): { [key: string]: any } => {
    if (subscribable && !subscribe) {
      subscribe = true;
      (minDate as AbstractControl).valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }
    if (isPresent(Validators.required(control))) return null;

    let d: Date = new Date(control.value);

    if (!isDate(d)) return { minDate: true };
    if (minDate instanceof Function) otherValue = minDate();
    if (subscribable) {
      otherValue = minDate.value;
    }

    return d >= new Date(otherValue) ? null : { minDate: true };
  };
};
