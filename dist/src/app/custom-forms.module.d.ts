import { AbstractControl, ValidatorFn } from '@angular/forms';
export declare const CustomValidators: {
    arrayLength: (value: string) => ValidatorFn;
    base64: ValidatorFn;
    creditCard: ValidatorFn;
    date: ValidatorFn;
    dateISO: ValidatorFn;
    digits: ValidatorFn;
    email: ValidatorFn;
    equal: (val: any) => ValidatorFn;
    equalTo: (equalControl: AbstractControl) => ValidatorFn;
    gt: (value: number) => ValidatorFn;
    gte: (value: number) => ValidatorFn;
    json: ValidatorFn;
    lt: (value: number) => ValidatorFn;
    lte: (value: number) => ValidatorFn;
    max: (value: number) => ValidatorFn;
    maxDate: (maxInput: any) => ValidatorFn;
    min: (value: number) => ValidatorFn;
    minDate: (minInput: any) => ValidatorFn;
    notEqual: (val: any) => ValidatorFn;
    notEqualTo: (notEqualControl: AbstractControl) => ValidatorFn;
    number: ValidatorFn;
    property: (value: string) => ValidatorFn;
    range: (value: number[]) => ValidatorFn;
    rangeLength: (value: number[]) => ValidatorFn;
    url: ValidatorFn;
    uuid: (version?: string) => ValidatorFn;
};
export declare class CustomFormsModule {
}
