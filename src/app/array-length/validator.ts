import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const arrayLength = (value: number): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {

    if (isPresent(Validators.required(control))) {
      return null;
    }

    const obj = control.value;
    return Array.isArray(obj) && obj.length >= +value ? null : { arrayLength: { minLength: value } };
  };
};
