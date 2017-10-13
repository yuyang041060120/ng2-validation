import { Validator, AbstractControl } from '@angular/forms';
export declare class JSONValidator implements Validator {
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
