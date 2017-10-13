import { Validator, AbstractControl } from '@angular/forms';
export declare class Base64Validator implements Validator {
    validate(c: AbstractControl): {
        [key: string]: any;
    };
}
