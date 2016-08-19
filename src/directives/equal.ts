import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';
import { EqualValueType } from '../custom-validators';

const EQUAL_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true
};

@Directive({
    selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
    providers: [EQUAL_VALIDATOR]
})
export class EqualValidator implements Validator, OnInit {
    @Input() equal: EqualValueType;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = CustomValidators.equal(this.equal);
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}