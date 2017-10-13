import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const hasProperty = (property: string): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: any} => {

    if (isPresent(Validators.required(control))) {
      return null;
    }

    const obj = control.value;
    return obj[property] != null ? null : { property: true };
  };
};
