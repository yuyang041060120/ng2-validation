import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const MIN_VALIDATOR: any = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinValidator),
    multi: true
};

@Directive({
    selector: '[min][formControlName],[min][formControl],[min][ngModel]',
    providers: [MIN_VALIDATOR]
})
export class MinValidator implements Validator, OnInit {
    @Input() min: number;

    private validator: ValidatorFn;

    ngOnInit() {
        this.validator = CustomValidators.min(this.min);
    }

    validate(c: AbstractControl): {[key: string]: any} {
        return this.validator(c);
    }
}
