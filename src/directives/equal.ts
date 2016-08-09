import { Directive, Attribute, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const EQUAL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true
};

@Directive({
    selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
    providers: [EQUAL_VALIDATOR]
})
export class EqualValidator implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute('equal') equal: string) {
        this.validator = CustomValidators.equal(equal);
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}