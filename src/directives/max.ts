import { Directive, Attribute, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const MAX_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxValidator),
    multi: true
};

@Directive({
    selector: '[max][formControlName],[max][formControl],[max][ngModel]',
    providers: [MAX_VALIDATOR]
})
export class MaxValidator implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute('max') max: string) {
        this.validator = CustomValidators.max(parseFloat(max));
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
