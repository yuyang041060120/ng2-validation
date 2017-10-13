import { OnInit } from '@angular/core';
import { Validator, FormControl, AbstractControl } from '@angular/forms';
export declare class EqualToValidator implements Validator, OnInit {
    equalTo: FormControl;
    private validator;
    ngOnInit(): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
