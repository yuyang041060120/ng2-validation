import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const equal = (val: any): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
        if (isPresent(Validators.required(control))) {
            return null;
        }

        let v: any = control.value;

        return val === v ? null : { equal: true };
    };
};
