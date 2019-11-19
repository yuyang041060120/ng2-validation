import { AbstractControl, ValidatorFn } from '@angular/forms';

export const equalTo = (equalControl: AbstractControl): ValidatorFn => {
  let subscribe: boolean = false;

  return (control: AbstractControl): {[key: string]: boolean} => {
    if (!subscribe) {
      subscribe = true;
      equalControl.valueChanges.subscribe(() => {
        control.updateValueAndValidity({ emitEvent: false });
      });
    }

    let v: string = control.value;

    return equalControl.value === v ? null : {equalTo: true};
  };
};
