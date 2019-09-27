import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const rangeLength = (value: Array<number>): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (!isPresent(value)) {
      return null;
    }
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: string = control.value;
    return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: { value: value } };
  };
};
