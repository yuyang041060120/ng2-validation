import { Directive, Attribute, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const RANGE_LENGTH_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeLengthValidator),
    multi: true
};

@Directive({
    selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
    providers: [RANGE_LENGTH_VALIDATOR]
})
export class RangeLengthValidator implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute('rangeLength') rangeLength: string) {
        this.validator = CustomValidators.rangeLength(JSON.parse(rangeLength));
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
