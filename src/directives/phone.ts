import { Directive, Attribute, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const PHONE_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => PhoneValidator),
    multi: true
};

@Directive({
    selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
    providers: [PHONE_VALIDATOR]
})
export class PhoneValidator implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute('phone') phone: string) {
        this.validator = CustomValidators.phone(phone);
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
