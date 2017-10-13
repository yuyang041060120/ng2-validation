import { Directive, Input, NgModule, forwardRef } from '@angular/core';
import { NG_VALIDATORS, Validators } from '@angular/forms';

/**
 * @param {?} obj
 * @return {?}
 */
function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
/**
 * @param {?} obj
 * @return {?}
 */
function isDate(obj) {
    return !/Invalid|NaN/.test(new Date(obj).toString());
}
/**
 * @param {?} obj
 * @return {?}
 */
function parseDate(obj) {
    if (typeof obj === 'object' && obj.year != null && obj.month != null && obj.day != null) {
        return obj.year + '-' + obj.month + '-' + obj.day;
    }
    return obj;
}

const base64 = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { 'base64': true };
};

const BASE64_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => Base64Validator),
    multi: true
};
class Base64Validator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return base64(c);
    }
}
Base64Validator.decorators = [
    { type: Directive, args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
Base64Validator.ctorParameters = () => [];

const creditCard = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    const /** @type {?} */ sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    /* tslint:disable */
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
        return { creditCard: true };
    }
    /* tslint:enable */
    let /** @type {?} */ sum = 0;
    let /** @type {?} */ digit;
    let /** @type {?} */ tmpNum;
    let /** @type {?} */ shouldDouble;
    for (let /** @type {?} */ i = sanitized.length - 1; i >= 0; i--) {
        digit = sanitized.substring(i, (i + 1));
        tmpNum = parseInt(digit, 10);
        if (shouldDouble) {
            tmpNum *= 2;
            if (tmpNum >= 10) {
                sum += ((tmpNum % 10) + 1);
            }
            else {
                sum += tmpNum;
            }
        }
        else {
            sum += tmpNum;
        }
        shouldDouble = !shouldDouble;
    }
    if (Boolean((sum % 10) === 0 ? sanitized : false)) {
        return null;
    }
    return { creditCard: true };
};

const CREDIT_CARD_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => CreditCardValidator),
    multi: true
};
class CreditCardValidator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return creditCard(c);
    }
}
CreditCardValidator.decorators = [
    { type: Directive, args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
CreditCardValidator.ctorParameters = () => [];

const date = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    return isDate(v) ? null : { date: true };
};

const DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateValidator),
    multi: true
};
class DateValidator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return date(c);
    }
}
DateValidator.decorators = [
    { type: Directive, args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
DateValidator.ctorParameters = () => [];

const dateISO = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};

const DATE_ISO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DateISOValidator),
    multi: true
};
class DateISOValidator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return dateISO(c);
    }
}
DateISOValidator.decorators = [
    { type: Directive, args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
DateISOValidator.ctorParameters = () => [];

const digits = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};

const DIGITS_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => DigitsValidator),
    multi: true
};
class DigitsValidator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return digits(c);
    }
}
DigitsValidator.decorators = [
    { type: Directive, args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
DigitsValidator.ctorParameters = () => [];

const email = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};

const EMAIL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EmailValidator),
    multi: true
};
class EmailValidator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return email(c);
    }
}
EmailValidator.decorators = [
    { type: Directive, args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EmailValidator.ctorParameters = () => [];

const equal = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = control.value;
        return val === v ? null : { equal: true };
    };
};

const EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualValidator),
    multi: true
};
class EqualValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = equal(this.equal);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
EqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EqualValidator.ctorParameters = () => [];
EqualValidator.propDecorators = {
    'equal': [{ type: Input },],
};

const equalTo = (equalControl) => {
    let /** @type {?} */ subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const /** @type {?} */ v = control.value;
        return equalControl.value === v ? null : { equalTo: true };
    };
};

const EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => EqualToValidator),
    multi: true
};
class EqualToValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = equalTo(this.equalTo);
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
}
EqualToValidator.decorators = [
    { type: Directive, args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EqualToValidator.ctorParameters = () => [];
EqualToValidator.propDecorators = {
    'equalTo': [{ type: Input },],
};

const gt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = +control.value;
        return v > +value ? null : { gt: true };
    };
};

const GREATER_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanValidator),
    multi: true
};
class GreaterThanValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = gt(this.gt);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
GreaterThanValidator.decorators = [
    { type: Directive, args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
GreaterThanValidator.ctorParameters = () => [];
GreaterThanValidator.propDecorators = {
    'gt': [{ type: Input },],
};

const gte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = +control.value;
        return v >= +value ? null : { gte: true };
    };
};

const GREATER_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => GreaterThanEqualValidator),
    multi: true
};
class GreaterThanEqualValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = gte(this.gte);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
GreaterThanEqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
GreaterThanEqualValidator.ctorParameters = () => [];
GreaterThanEqualValidator.propDecorators = {
    'gte': [{ type: Input },],
};

const json = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    try {
        const /** @type {?} */ obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) { }
    return { json: true };
};

const JSON_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => JSONValidator),
    multi: true
};
class JSONValidator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return json(c);
    }
}
JSONValidator.decorators = [
    { type: Directive, args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
JSONValidator.ctorParameters = () => [];

const lt = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = +control.value;
        return v < +value ? null : { lt: true };
    };
};

const LESS_THAN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanValidator),
    multi: true
};
class LessThanValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = lt(this.lt);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
LessThanValidator.decorators = [
    { type: Directive, args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
LessThanValidator.ctorParameters = () => [];
LessThanValidator.propDecorators = {
    'lt': [{ type: Input },],
};

const lte = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = +control.value;
        return v <= +value ? null : { lte: true };
    };
};

const LESS_THAN_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => LessThanEqualValidator),
    multi: true
};
class LessThanEqualValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = lte(this.lte);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
LessThanEqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
LessThanEqualValidator.ctorParameters = () => [];
LessThanEqualValidator.propDecorators = {
    'lte': [{ type: Input },],
};

const max = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = +control.value;
        return v <= +value ? null : { actualValue: v, requiredValue: +value, max: true };
    };
};

const MAX_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxValidator),
    multi: true
};
class MaxValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = max(this.max);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
MaxValidator.decorators = [
    { type: Directive, args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
MaxValidator.ctorParameters = () => [];
MaxValidator.propDecorators = {
    'max': [{ type: Input },],
};

const maxDate = (value) => {
    value = parseDate(value);
    if (!isDate(value) && !(value instanceof Function)) {
        throw Error('maxDate value must be or return a formatted date');
    }
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ d = new Date(control.value).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d <= new Date(value).getTime() ? null : { maxDate: true };
    };
};

const MAX_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MaxDateValidator),
    multi: true
};
class MaxDateValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = maxDate(this.maxDate);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
MaxDateValidator.decorators = [
    { type: Directive, args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
MaxDateValidator.ctorParameters = () => [];
MaxDateValidator.propDecorators = {
    'maxDate': [{ type: Input },],
};

const min = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = +control.value;
        return v >= +value ? null : { actualValue: v, requiredValue: +value, min: true };
    };
};

const MIN_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinValidator),
    multi: true
};
class MinValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = min(this.min);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
MinValidator.decorators = [
    { type: Directive, args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
MinValidator.ctorParameters = () => [];
MinValidator.propDecorators = {
    'min': [{ type: Input },],
};

const minDate = (value) => {
    value = parseDate(value);
    if (!isDate(value) && !(value instanceof Function)) {
        throw Error('minDate value must be or return a formatted date');
    }
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ d = new Date(control.value).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d >= new Date(value).getTime() ? null : { minDate: true };
    };
};

const MIN_DATE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => MinDateValidator),
    multi: true
};
class MinDateValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = minDate(this.minDate);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
MinDateValidator.decorators = [
    { type: Directive, args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
MinDateValidator.ctorParameters = () => [];
MinDateValidator.propDecorators = {
    'minDate': [{ type: Input },],
};

const notEqual = (val) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = control.value;
        return val !== v ? null : { notEqual: true };
    };
};

const NOT_EQUAL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualValidator),
    multi: true
};
class NotEqualValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = notEqual(this.notEqual);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
NotEqualValidator.decorators = [
    { type: Directive, args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
NotEqualValidator.ctorParameters = () => [];
NotEqualValidator.propDecorators = {
    'notEqual': [{ type: Input },],
};

const notEqualTo = (notEqualControl) => {
    let /** @type {?} */ subscribe = false;
    return (control) => {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(() => {
                control.updateValueAndValidity();
            });
        }
        const /** @type {?} */ v = control.value;
        return notEqualControl.value !== v ? null : { notEqualTo: true };
    };
};

const NOT_EQUAL_TO_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NotEqualToValidator),
    multi: true
};
class NotEqualToValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = notEqualTo(this.notEqualTo);
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
}
NotEqualToValidator.decorators = [
    { type: Directive, args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
NotEqualToValidator.ctorParameters = () => [];
NotEqualToValidator.propDecorators = {
    'notEqualTo': [{ type: Input },],
};

const number = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};

const NUMBER_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => NumberValidator),
    multi: true
};
class NumberValidator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return number(c);
    }
}
NumberValidator.decorators = [
    { type: Directive, args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
NumberValidator.ctorParameters = () => [];

const hasProperty = (property) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ obj = control.value;
        return obj[property] != null ? null : { property: true };
    };
};

const PROPERTY_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => PropertyValidator),
    multi: true
};
class PropertyValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = hasProperty(this.property);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'property') {
                this.validator = hasProperty(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
PropertyValidator.decorators = [
    { type: Directive, args: [{
                selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                providers: [PROPERTY_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
PropertyValidator.ctorParameters = () => [];
PropertyValidator.propDecorators = {
    'property': [{ type: Input },],
};

const range = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = +control.value;
        return v >= value[0] && v <= value[1] ? null : { actualValue: v, requiredValue: value, range: true };
    };
};

const RANGE_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeValidator),
    multi: true
};
class RangeValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = range(this.range);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
RangeValidator.decorators = [
    { type: Directive, args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
RangeValidator.ctorParameters = () => [];
RangeValidator.propDecorators = {
    'range': [{ type: Input },],
};

const rangeLength = (value) => {
    return (control) => {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = control.value;
        return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: true };
    };
};

const RANGE_LENGTH_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => RangeLengthValidator),
    multi: true
};
class RangeLengthValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = rangeLength(this.rangeLength);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
RangeLengthValidator.decorators = [
    { type: Directive, args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
RangeLengthValidator.ctorParameters = () => [];
RangeLengthValidator.propDecorators = {
    'rangeLength': [{ type: Input },],
};

const url = (control) => {
    if (isPresent(Validators.required(control))) {
        return null;
    }
    const /** @type {?} */ v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
};

const URL_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UrlValidator),
    multi: true
};
class UrlValidator {
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return url(c);
    }
}
UrlValidator.decorators = [
    { type: Directive, args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
UrlValidator.ctorParameters = () => [];

const uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
const uuid = (version) => {
    return (control) => {
        if (isPresent(Validators.required(control))) {
            return null;
        }
        const /** @type {?} */ v = control.value;
        const /** @type {?} */ pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};

const UUID_VALIDATOR = {
    provide: NG_VALIDATORS,
    useExisting: forwardRef(() => UUIDValidator),
    multi: true
};
class UUIDValidator {
    /**
     * @return {?}
     */
    ngOnInit() {
        this.validator = uuid(this.uuid);
    }
    /**
     * @param {?} changes
     * @return {?}
     */
    ngOnChanges(changes) {
        for (const /** @type {?} */ key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    }
    /**
     * @param {?} c
     * @return {?}
     */
    validate(c) {
        return this.validator(c);
    }
    /**
     * @param {?} fn
     * @return {?}
     */
    registerOnValidatorChange(fn) {
        this.onChange = fn;
    }
}
UUIDValidator.decorators = [
    { type: Directive, args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
UUIDValidator.ctorParameters = () => [];
UUIDValidator.propDecorators = {
    'uuid': [{ type: Input },],
};

const CustomValidators = {
    base64,
    creditCard,
    date,
    dateISO,
    digits,
    email,
    equal,
    equalTo,
    gt,
    gte,
    json,
    lt,
    lte,
    max,
    maxDate,
    min,
    minDate,
    notEqual,
    notEqualTo,
    number,
    hasProperty,
    range,
    rangeLength,
    url,
    uuid
};
const CUSTOM_FORM_DIRECTIVES = [
    Base64Validator,
    CreditCardValidator,
    DateValidator,
    DateISOValidator,
    DigitsValidator,
    EmailValidator,
    EqualValidator,
    EqualToValidator,
    GreaterThanValidator,
    GreaterThanEqualValidator,
    JSONValidator,
    LessThanValidator,
    LessThanEqualValidator,
    MaxValidator,
    MaxDateValidator,
    MinValidator,
    MinDateValidator,
    NotEqualValidator,
    NotEqualToValidator,
    NumberValidator,
    PropertyValidator,
    RangeValidator,
    RangeLengthValidator,
    UrlValidator,
    UUIDValidator
];
class CustomFormsModule {
}
CustomFormsModule.decorators = [
    { type: NgModule, args: [{
                declarations: [CUSTOM_FORM_DIRECTIVES],
                exports: [CUSTOM_FORM_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
CustomFormsModule.ctorParameters = () => [];

/**
 * Generated bundle index. Do not edit.
 */

export { CustomFormsModule, CustomValidators, Base64Validator as ɵa, base64 as ɵz, CreditCardValidator as ɵb, creditCard as ɵba, DateValidator as ɵc, date as ɵbb, DateISOValidator as ɵd, dateISO as ɵbc, DigitsValidator as ɵe, digits as ɵbd, EmailValidator as ɵf, email as ɵbe, EqualValidator as ɵg, equal as ɵbf, EqualToValidator as ɵh, equalTo as ɵbg, GreaterThanValidator as ɵi, gt as ɵbh, GreaterThanEqualValidator as ɵj, gte as ɵbi, JSONValidator as ɵk, json as ɵbj, LessThanValidator as ɵl, lt as ɵbk, LessThanEqualValidator as ɵm, lte as ɵbl, MaxValidator as ɵn, max as ɵbm, MaxDateValidator as ɵo, maxDate as ɵbn, MinValidator as ɵp, min as ɵbo, MinDateValidator as ɵq, minDate as ɵbp, NotEqualValidator as ɵr, notEqual as ɵbq, NotEqualToValidator as ɵs, notEqualTo as ɵbr, NumberValidator as ɵt, number as ɵbs, PropertyValidator as ɵu, hasProperty as ɵbt, RangeValidator as ɵv, range as ɵbu, RangeLengthValidator as ɵw, rangeLength as ɵbv, UrlValidator as ɵx, url as ɵbw, UUIDValidator as ɵy, uuid as ɵbx };
//# sourceMappingURL=ng4-validators.js.map
