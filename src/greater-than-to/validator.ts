import { AbstractControl, ValidatorFn } from '@angular/forms';

export const gtTo = (gtToControl: AbstractControl): ValidatorFn => {
  let subscribe: boolean = false;

  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!subscribe) {
      subscribe = true;
      gtToControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity();
      });
    }

    let v: number = +control.value;

    return +gtToControl.value < v ? null : {gtTo: true};
  };
};
