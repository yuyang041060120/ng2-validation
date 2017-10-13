import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const json: ValidatorFn = (control: AbstractControl): {[key: string]: boolean} => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;

  try {
    const obj = JSON.parse(v);

    if (Boolean(obj) && typeof obj === 'object') {
      return null;
    }
  } catch (e) { }
  return {json: true};
};
