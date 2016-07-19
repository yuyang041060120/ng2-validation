import { Directive, Attribute, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const RANGE_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeValidator),
    multi: true
};

@Directive({
    selector: '[range][formControlName],[range][formControl],[range][ngModel]',
    providers: [RANGE_VALIDATOR]
})
export class RangeValidator implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute('range') range: string) {
        this.validator = CustomValidators.range(JSON.parse(range));
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
