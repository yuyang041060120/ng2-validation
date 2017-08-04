import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';
import { isValidNumber } from 'libphonenumber-js';

import { isPresent } from '../util/lang';

export const phone = (country: string): ValidatorFn => {
  return (control: AbstractControl): { [key: string]: boolean } => {
    if (isPresent(Validators.required(control))) return null;

    return isValidNumber(control.value, country) ? null : {phone: true};
  };
};
