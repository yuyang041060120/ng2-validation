import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';

export const property = (value: string): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors => {

    if (isPresent(Validators.required(control))) {
      return null;
    }

    const properties = value.split(',');

    const obj = control.value;
    let isValid = true;
    for (const prop of properties) {
      if (obj[prop] == null) {
        isValid = false;
        break;
      }
    }
    return isValid ? null : { hasProperty: { value: value } };
  };
};
