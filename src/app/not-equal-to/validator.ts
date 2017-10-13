import { AbstractControl, ValidatorFn } from '@angular/forms';

export const notEqualTo = (notEqualControl: AbstractControl): ValidatorFn => {
  let subscribe = false;
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!subscribe) {
      subscribe = true;
      notEqualControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    const v: string = control.value;

    return notEqualControl.value !== v ? null : {notEqualTo: true};
  };
};
