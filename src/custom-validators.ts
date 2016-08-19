import { ValidatorFn, AbstractControl, Validators } from '@angular/forms';

import { isPresent, isString } from './lang';

export type EqualValueType = string | boolean | number;

export class CustomValidators {
    /**
     * Validator that requires controls to have a value of a range length.
     */
    static rangeLength(rangeLength: Array<number>): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            let v: string = control.value;
            return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : {'rangeLength': true};
        };
    }

    /**
     * Validator that requires controls to have a value of a min value.
     */
    static min(min: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            let v: number = control.value;
            return v >= min ? null : {'min': true};
        };
    }

    /**
     * Validator that requires controls to have a value of a max value.
     */
    static max(max: number): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            let v: number = control.value;
            return v <= max ? null : {'max': true};
        };
    }

    /**
     * Validator that requires controls to have a value of a range value.
     */
    static range(range: Array<number>): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            let v: number = control.value;
            return v >= range[0] && v <= range[1] ? null : {'range': true};
        };
    }

    /**
     * Validator that requires controls to have a value of digits.
     */
    static digits(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;
        return /^\d+$/.test(v) ? null : {'digits': true};
    }

    /**
     * Validator that requires controls to have a value of number.
     */
    static number(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;
        return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : {'number': true};
    }

    /**
     * Validator that requires controls to have a value of url.
     */
    static url(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;
        return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : {'url': true};
    }

    /**
     * Validator that requires controls to have a value of email.
     */
    static email(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;
        return /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/.test(v) ? null : {'email': true};
    }

    /**
     * Validator that requires controls to have a value of date.
     */
    static date(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;
        return !/Invalid|NaN/.test(new Date(v).toString()) ? null : {'date': true};
    }

    /**
     * Validator that requires controls to have a value of dateISO.
     */
    static dateISO(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;
        return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : {'dateISO': true};
    }

    /**
     * Validator that requires controls to have a value of creditCard.
     */
    static creditCard(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;

        let sanitized = v.replace(/[^0-9]+/g, '');

        // problem with chrome
        if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
            return {'creditCard': true};
        }

        let sum = 0;
        let digit;
        let tmpNum;
        let shouldDouble;
        for (let i = sanitized.length - 1; i >= 0; i--) {
            digit = sanitized.substring(i, (i + 1));
            tmpNum = parseInt(digit, 10);
            if (shouldDouble) {
                tmpNum *= 2;
                if (tmpNum >= 10) {
                    sum += ((tmpNum % 10) + 1);
                } else {
                    sum += tmpNum;
                }
            } else {
                sum += tmpNum;
            }
            shouldDouble = !shouldDouble;
        }

        if (Boolean((sum % 10) === 0 ? sanitized : false)) {
            return null;
        }

        return {'creditCard': true};
    }

    /**
     * Validator that requires controls to have a value of JSON.
     */
    static json(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;

        try {
            let obj = JSON.parse(v);

            if (Boolean(obj) && typeof obj === 'object') {
                return null;
            }
        } catch (e) {
        }
        return {'json': true};
    }

    /**
     * Validator that requires controls to have a value of base64.
     */
    static base64(control: AbstractControl): {[key: string]: boolean} {
        if (isPresent(Validators.required(control))) return null;

        let v: string = control.value;
        return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : {'base64': true};
    }

    /**
     * Validator that requires controls to have a value of phone.
     */
    static phone(locale?: string): ValidatorFn {
        const phones = {
            'zh-CN': /^(\+?0?86\-?)?((13\d|14[57]|15[^4,\D]|17[678]|18\d)\d{8}|170[059]\d{7})$/,
            'zh-TW': /^(\+?886\-?|0)?9\d{8}$/,
            'en-ZA': /^(\+?27|0)\d{9}$/,
            'en-AU': /^(\+?61|0)4\d{8}$/,
            'en-HK': /^(\+?852\-?)?[569]\d{3}\-?\d{4}$/,
            'fr-FR': /^(\+?33|0)[67]\d{8}$/,
            'pt-PT': /^(\+351)?9[1236]\d{7}$/,
            'el-GR': /^(\+?30)?(69\d{8})$/,
            'en-GB': /^(\+?44|0)7\d{9}$/,
            'en-US': /^(\+?1)?[2-9]\d{2}[2-9](?!11)\d{6}$/,
            'en-ZM': /^(\+26)?09[567]\d{7}$/,
            'ru-RU': /^(\+?7|8)?9\d{9}$/,
            'nb-NO': /^(\+?47)?[49]\d{7}$/,
            'nn-NO': /^(\+?47)?[49]\d{7}$/,
            'vi-VN': /^(0|\+?84)?((1(2([0-9])|6([2-9])|88|99))|(9((?!5)[0-9])))([0-9]{7})$/,
            'en-NZ': /^(\+?64|0)2\d{7,9}$/
        };

        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            let v: string = control.value;
            let pattern = phones[locale] || phones['en-US'];

            return (new RegExp(pattern)).test(v) ? null : {'phone': true};
        };
    }

    /**
     * Validator that requires controls to have a value of uuid.
     */
    static uuid(version?: string): ValidatorFn {
        const uuid = {
            '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
            '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
            'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
        };

        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            let v: string = control.value;
            let pattern = uuid[version] || uuid.all;

            return (new RegExp(pattern)).test(v) ? null : {'uuid': true};
        };
    }

    /**
     * Validator that requires controls to have a value to equal another value.
     */
    static equal(str: EqualValueType): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            let v: string = control.value;

            return str === v ? null : {equal: true};
        };
    }

    /**
     * Validator that requires controls to have a value to equal another control.
     */
    static equalTo(equalControl: AbstractControl): ValidatorFn {
        return (control: AbstractControl): {[key: string]: any} => {
            if (isPresent(Validators.required(control))) return null;

            let v: string = control.value;

            return equalControl.value === v ? null : {equalTo: true};
        };
    }
}