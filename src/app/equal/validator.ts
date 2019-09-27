import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const equal = (val: any): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {
    if (isPresent(Validators.required(control))) {
      return null;
    }

    const v: any = control.value;

    return val === v ? null : { equal: { value: val } };
  };
};
