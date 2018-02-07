import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate } from '../util/lang';

export const maxDate = (maxDate: any | AbstractControl): ValidatorFn => {
  let subscribe: boolean = false;
  let otherValue = maxDate;
  const subscribable = maxDate instanceof AbstractControl;
  if (!subscribable && !isDate(maxDate) && !(maxDate instanceof Function)) {
    throw Error('maxDate value must be or return a formatted date');
  }

  return (control: AbstractControl): { [key: string]: any } => {
    if (subscribable && !subscribe) {
      subscribe = true;
      (maxDate as AbstractControl).valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }
    if (isPresent(Validators.required(control))) return null;

    let d: Date = new Date(control.value);

    if (!isDate(d)) return { minDate: true };
    if (maxDate instanceof Function) otherValue = maxDate();
    if (subscribable) {
      otherValue = maxDate.value;
    }
    return d <= new Date(otherValue) ? null : {maxDate: true};
  };
};
