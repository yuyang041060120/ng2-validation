import { AbstractControl, FormControl, NgModel, Validators, ValidatorFn } from '@angular/forms';
import { isPresent, isDate, parseDate } from '../util/lang';

export const maxDate = (maxInput: any): ValidatorFn => {
  let value;
  let subscribe = false;
  let maxValue = maxInput;
  const isForm = maxInput instanceof FormControl || maxInput instanceof NgModel;
  return (control: AbstractControl): {[key: string]: any} => {
    if (!subscribe && isForm) {
      subscribe = true;
      maxInput.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    if (isForm) {
      maxValue = maxInput.value;
    }

    value = parseDate(maxValue);

    if (!isDate(value) && !(value instanceof Function)) {
      if (value == null) {
        return null;
      } else if (isForm) {
        return {maxDate: true, error: 'maxDate is invalid'};
      } else {
        throw Error('maxDate value must be or return a formatted date');
      }
    }

    if (isPresent(Validators.required(control))) {
      return null;
    }

    const d = new Date(parseDate(control.value)).getTime();

    if (!isDate(d)) {
      return { value: true };
    }
    if (value instanceof Function) {
      value = value();
    }

    return d <= new Date(value).getTime() ? null : {maxDate: true, error: 'greater than maxDate'};
  };
};
