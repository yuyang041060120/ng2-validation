import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const rangeLength = (rangeLength: Array<number>): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!isPresent(rangeLength)) return null;
    if (isPresent(Validators.required(control))) return null;

    let v: string = control.value;
    return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : {rangeLength: true};
  };
};
