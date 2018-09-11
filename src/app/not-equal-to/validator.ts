import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';

export const notEqualTo = (notEqualControl: AbstractControl): ValidatorFn => {
  let subscribe = false;
  return (control: AbstractControl): ValidationErrors => {
    if (!subscribe) {
      subscribe = true;
      notEqualControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    const v: string = control.value;

    if (notEqualControl.value == null && v == null) {
      return null;
    }

    return notEqualControl.value !== v ? null : { notEqualTo: { control: notEqualControl, value: notEqualControl.value } };
  };
};
