import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const lt = (lt: number): ValidatorFn => {
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!lt) return null;
    if (!isPresent(lt)) return null;
    if (isPresent(Validators.required(control))) return null;

    let v: number = +control.value;
    return v < +lt ? null : {lt: true};
  };
};
