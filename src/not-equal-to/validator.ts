import { AbstractControl, ValidatorFn } from '@angular/forms';

export const notEqualTo = (notEqualControl: AbstractControl): ValidatorFn => {
  let subscribe: boolean = false;
  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!subscribe) {
      subscribe = true;
      notEqualControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    let v: string = control.value;

    return notEqualControl.value !== v ? null : {notEqualTo: true};
  };
};
