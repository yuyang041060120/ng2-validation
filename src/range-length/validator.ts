import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent } from '../util/lang';

export const rangeLength = (val: Array<number>): ValidatorFn => {
    return (control: AbstractControl): { [key: string]: boolean } => {
        if (!isPresent(val)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }

        let v: string = control.value;
        return v.length >= val[0] && v.length <= val[1] ? null : { rangeLength: true };
    };
};
