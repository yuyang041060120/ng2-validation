import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const min = (val: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: any } => {
        if (!isPresent(val)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }

        let v: number = +control.value;
        return v >= +val ? null : { actualValue: v, requiredValue: +val, min: true };
    };
};
