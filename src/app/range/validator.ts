import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const range = (value: Array<number>): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: number = +control.value;
    return v >= value[0] && v <= value[1] ? null : { range: { value: value } };
  };
};
