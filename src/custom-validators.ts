import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

import { isPresent } from './lang';

export class CustomValidators {
    /**
     * Validator that requires controls to have a value of a range length.
     */
    static rangeLength(rangeLength: Array<number>): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            var v: string = control.value;
            return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : {'rangeLength': true};
        };
    }

    /**
     * Validator that requires controls to have a value of a min value.
     */
    static min(min: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            var v: number = control.value;
            return v >= min ? null : {'min': true};
        };
    }

    /**
     * Validator that requires controls to have a value of a max value.
     */
    static max(max: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            var v: number = control.value;
            return v <= max ? null : {'max': true};
        };
    }

    /**
     * Validator that requires controls to have a value of a range value.
     */
    static range(range: Array<number>): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            var v: number = control.value;
            return v >= range[0] && v <= range[1] ? null : {'range': true};
        };
    }

    /**
     * Validator that requires controls to have a value of digits.
     */
    static digits(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        var v: string = control.value;
        return /^\d+$/.test(v) ? null : {'digits': true};
    }

    /**
     * Validator that requires controls to have a value of number.
     */
    static number(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        var v: string = control.value;
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {'number': true};
    }

    /**
     * Validator that requires controls to have a value of url.
     */
    static url(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        var v: string = control.value;
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {'url': true};
    }

    /**
     * Validator that requires controls to have a value of email.
     */
    static email(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        var v: string = control.value;
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(v) ? null : {'email': true};
    }

    /**
     * Validator that requires controls to have a value of date.
     */
    static date(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        var v: string = control.value;
        return !/Invalid|NaN/.test(new Date(v).toString()) ? null : {'date': true};
    }

    /**
     * Validator that requires controls to have a value of dateISO.
     */
    static dateiso(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        var v: string = control.value;
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {'dateiso': true};
    }
}