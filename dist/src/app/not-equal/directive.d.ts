import { OnInit, SimpleChanges, OnChanges } from '@angular/core';
import { Validator, AbstractControl } from '@angular/forms';
export declare class NotEqualValidator implements Validator, OnInit, OnChanges {
    notEqual: any;
    private validator;
    private onChange;
    ngOnInit(): void;
    ngOnChanges(changes: SimpleChanges): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
    registerOnValidatorChange(fn: () => void): void;
}
