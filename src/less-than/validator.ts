import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const lt = (val: number): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } => {
        if (!isPresent(val)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }

        let v: number = +control.value;
        return v < +val ? null : { lt: true };
    };
};
