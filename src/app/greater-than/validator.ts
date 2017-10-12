import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const gt = (gt: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!isPresent(gt)) return null;
    if (isPresent(Validators.required(control))) return null;

    let v: number = +control.value;
    return v > +gt ? null : {gt: true};
  };
};
