import { OnInit } from '@angular/core';
import { Validator, FormControl, AbstractControl } from '@angular/forms';
export declare class NotEqualToValidator implements Validator, OnInit {
    notEqualTo: FormControl;
    private validator;
    ngOnInit(): void;
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
