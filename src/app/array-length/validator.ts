import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const arrayLength = (value: string): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {

    if (isPresent(Validators.required(control))) {
      return null;
    }

    const obj = control.value;
    return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: +value };
  };
};
