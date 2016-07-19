import { Directive, Attribute, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const MIN_LENGTH_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinValidator),
    multi: true
};

@Directive({
    selector: '[min][formControlName],[min][formControl],[min][ngModel]',
    providers: [MIN_LENGTH_VALIDATOR]
})
export class MinValidator implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute('min') min: string) {
        this.validator = CustomValidators.min(parseFloat(min));
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
