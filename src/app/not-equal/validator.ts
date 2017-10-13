import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const notEqual = (val: any): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: any = control.value;

    return val !== v ? null : {notEqual: true};
  };
};
