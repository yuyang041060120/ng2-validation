import { AbstractControl, Validators, ValidatorFn } from '@angular/forms';

import { isPresent, isDate } from '../util/lang';

export const minDate = (val: any | AbstractControl): ValidatorFn => {
    let subscribe = false;
    let otherValue = val;
    const subscribable = val instanceof AbstractControl;
    if (!subscribable && !isDate(val) && !(val instanceof Function)) {
        throw Error('minDate value must be or return a formatted date');
    }

    return (control: AbstractControl): { [key: string]: any } => {
        if (subscribable && !subscribe) {
            subscribe = true;
            (val as AbstractControl).valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }

        let d: Date = new Date(control.value);

        if (!isDate(d)) {
            return { minDate: true };
        }
        if (val instanceof Function) { otherValue = val(); }
        if (subscribable) {
            otherValue = val.value;
        }

        return d >= new Date(otherValue) ? null : { minDate: true };
    };
};
