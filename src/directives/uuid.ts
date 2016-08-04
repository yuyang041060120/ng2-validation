import { Directive, Attribute, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const UUID_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UUIDValidator),
    multi: true
};

@Directive({
    selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
    providers: [UUID_VALIDATOR]
})
export class UUIDValidator implements Validator {
    private validator: ValidatorFn;

    constructor(@Attribute('uuid') uuid: string) {
        this.validator = CustomValidators.uuid(uuid);
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
