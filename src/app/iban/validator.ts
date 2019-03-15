import { AbstractControl, ValidationErrors, ValidatorFn, Validators } from '@angular/forms';
import { isPresent } from '../util/lang';


export const Iban: ValidatorFn = (control: AbstractControl): ValidationErrors => {
  if (isPresent(Validators.required(control))) {
    return null;
  }

  const v: string = control.value;
  /* tslint:disable */
  return /^[a-zA-Z]{2}[0-9]{2}[a-zA-Z0-9]{4}[0-9]{7}([a-zA-Z0-9]?){0,16}/.test(v) ? null : {'iban': true};
  /* tslint:enable */
};
