import { Directive, Attribute, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const RANGE_LENGTH_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeLengthValidator),
    multi: true
};

@Directive({
    selector: '[rangelength][formControlName],[rangelength][formControl],[rangelength][ngModel]',
    providers: [RANGE_LENGTH_VALIDATOR]
})
export class RangeLengthValidator implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute('rangelength') rangeLength: string) {
        this.validator = CustomValidators.rangeLength(JSON.parse(rangeLength));
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
