import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const property = (value: string): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {

    if (isPresent(Validators.required(control))) {
      return null;
    }

    const obj = control.value;
    return obj[value] != null ? null : { hasProperty: true, property: value };
  };
};
