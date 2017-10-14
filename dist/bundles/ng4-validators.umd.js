(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms'], factory) :
	(factory((global['ng4-validators'] = {}),global.ng.core,global.ng.forms));
}(this, (function (exports,core,forms) { 'use strict';

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
var base64 = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { 'base64': true };
};
var BASE64_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return Base64Validator; }),
    multi: true
};
var Base64Validator = (function () {
    function Base64Validator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    Base64Validator.prototype.validate = function (c) {
        return base64(c);
    };
    return Base64Validator;
}());
Base64Validator.decorators = [
    { type: core.Directive, args: [{
                selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
                providers: [BASE64_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
Base64Validator.ctorParameters = function () { return []; };
var creditCard = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    var /** @type {?} */ sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    /* tslint:disable */
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
        return { creditCard: true };
    }
    /* tslint:enable */
    var /** @type {?} */ sum = 0;
    var /** @type {?} */ digit;
    var /** @type {?} */ tmpNum;
    var /** @type {?} */ shouldDouble;
    for (var /** @type {?} */ i = sanitized.length - 1; i >= 0; i--) {
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
var CREDIT_CARD_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return CreditCardValidator; }),
    multi: true
};
var CreditCardValidator = (function () {
    function CreditCardValidator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    CreditCardValidator.prototype.validate = function (c) {
        return creditCard(c);
    };
    return CreditCardValidator;
}());
CreditCardValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
                providers: [CREDIT_CARD_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
CreditCardValidator.ctorParameters = function () { return []; };
var date = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    return isDate(v) ? null : { date: true };
};
var DATE_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return DateValidator; }),
    multi: true
};
var DateValidator = (function () {
    function DateValidator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    DateValidator.prototype.validate = function (c) {
        return date(c);
    };
    return DateValidator;
}());
DateValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[date][formControlName],[date][formControl],[date][ngModel]',
                providers: [DATE_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
DateValidator.ctorParameters = function () { return []; };
var dateISO = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};
var DATE_ISO_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return DateISOValidator; }),
    multi: true
};
var DateISOValidator = (function () {
    function DateISOValidator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    DateISOValidator.prototype.validate = function (c) {
        return dateISO(c);
    };
    return DateISOValidator;
}());
DateISOValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
                providers: [DATE_ISO_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
DateISOValidator.ctorParameters = function () { return []; };
var digits = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};
var DIGITS_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return DigitsValidator; }),
    multi: true
};
var DigitsValidator = (function () {
    function DigitsValidator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    DigitsValidator.prototype.validate = function (c) {
        return digits(c);
    };
    return DigitsValidator;
}());
DigitsValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
                providers: [DIGITS_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
DigitsValidator.ctorParameters = function () { return []; };
var email = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    /* tslint:disable */
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
    /* tslint:enable */
};
var EMAIL_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return EmailValidator; }),
    multi: true
};
var EmailValidator = (function () {
    function EmailValidator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    EmailValidator.prototype.validate = function (c) {
        return email(c);
    };
    return EmailValidator;
}());
EmailValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[email][formControlName],[email][formControl],[email][ngModel]',
                providers: [EMAIL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EmailValidator.ctorParameters = function () { return []; };
var equal = function (val) {
    return function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = control.value;
        return val === v ? null : { equal: true };
    };
};
var EQUAL_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return EqualValidator; }),
    multi: true
};
var EqualValidator = (function () {
    function EqualValidator() {
    }
    /**
     * @return {?}
     */
    EqualValidator.prototype.ngOnInit = function () {
        this.validator = equal(this.equal);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    EqualValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    EqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    EqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return EqualValidator;
}());
EqualValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
                providers: [EQUAL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EqualValidator.ctorParameters = function () { return []; };
EqualValidator.propDecorators = {
    'equal': [{ type: core.Input },],
};
var equalTo = function (equalControl) {
    var /** @type {?} */ subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var /** @type {?} */ v = control.value;
        return equalControl.value === v ? null : { equalTo: true };
    };
};
var EQUAL_TO_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return EqualToValidator; }),
    multi: true
};
var EqualToValidator = (function () {
    function EqualToValidator() {
    }
    /**
     * @return {?}
     */
    EqualToValidator.prototype.ngOnInit = function () {
        this.validator = equalTo(this.equalTo);
    };
    /**
     * @param {?} c
     * @return {?}
     */
    EqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return EqualToValidator;
}());
EqualToValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
                providers: [EQUAL_TO_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
EqualToValidator.ctorParameters = function () { return []; };
EqualToValidator.propDecorators = {
    'equalTo': [{ type: core.Input },],
};
var gt = function (value) {
    return function (control) {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = +control.value;
        return v > +value ? null : { gt: true };
    };
};
var GREATER_THAN_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return GreaterThanValidator; }),
    multi: true
};
var GreaterThanValidator = (function () {
    function GreaterThanValidator() {
    }
    /**
     * @return {?}
     */
    GreaterThanValidator.prototype.ngOnInit = function () {
        this.validator = gt(this.gt);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GreaterThanValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    GreaterThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    GreaterThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanValidator;
}());
GreaterThanValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
                providers: [GREATER_THAN_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
GreaterThanValidator.ctorParameters = function () { return []; };
GreaterThanValidator.propDecorators = {
    'gt': [{ type: core.Input },],
};
var gte = function (value) {
    return function (control) {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = +control.value;
        return v >= +value ? null : { gte: true };
    };
};
var GREATER_THAN_EQUAL_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return GreaterThanEqualValidator; }),
    multi: true
};
var GreaterThanEqualValidator = (function () {
    function GreaterThanEqualValidator() {
    }
    /**
     * @return {?}
     */
    GreaterThanEqualValidator.prototype.ngOnInit = function () {
        this.validator = gte(this.gte);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    GreaterThanEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    GreaterThanEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    GreaterThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanEqualValidator;
}());
GreaterThanEqualValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
                providers: [GREATER_THAN_EQUAL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
GreaterThanEqualValidator.ctorParameters = function () { return []; };
GreaterThanEqualValidator.propDecorators = {
    'gte': [{ type: core.Input },],
};
var json = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    try {
        var /** @type {?} */ obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) { }
    return { json: true };
};
var JSON_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return JSONValidator; }),
    multi: true
};
var JSONValidator = (function () {
    function JSONValidator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    JSONValidator.prototype.validate = function (c) {
        return json(c);
    };
    return JSONValidator;
}());
JSONValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[json][formControlName],[json][formControl],[json][ngModel]',
                providers: [JSON_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
JSONValidator.ctorParameters = function () { return []; };
var lt = function (value) {
    return function (control) {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = +control.value;
        return v < +value ? null : { lt: true };
    };
};
var LESS_THAN_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return LessThanValidator; }),
    multi: true
};
var LessThanValidator = (function () {
    function LessThanValidator() {
    }
    /**
     * @return {?}
     */
    LessThanValidator.prototype.ngOnInit = function () {
        this.validator = lt(this.lt);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LessThanValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    LessThanValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LessThanValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanValidator;
}());
LessThanValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
                providers: [LESS_THAN_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
LessThanValidator.ctorParameters = function () { return []; };
LessThanValidator.propDecorators = {
    'lt': [{ type: core.Input },],
};
var lte = function (value) {
    return function (control) {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = +control.value;
        return v <= +value ? null : { lte: true };
    };
};
var LESS_THAN_EQUAL_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return LessThanEqualValidator; }),
    multi: true
};
var LessThanEqualValidator = (function () {
    function LessThanEqualValidator() {
    }
    /**
     * @return {?}
     */
    LessThanEqualValidator.prototype.ngOnInit = function () {
        this.validator = lte(this.lte);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    LessThanEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    LessThanEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    LessThanEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanEqualValidator;
}());
LessThanEqualValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
                providers: [LESS_THAN_EQUAL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
LessThanEqualValidator.ctorParameters = function () { return []; };
LessThanEqualValidator.propDecorators = {
    'lte': [{ type: core.Input },],
};
var max = function (value) {
    return function (control) {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = +control.value;
        return v <= +value ? null : { actualValue: v, requiredValue: +value, max: true };
    };
};
var MAX_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return MaxValidator; }),
    multi: true
};
var MaxValidator = (function () {
    function MaxValidator() {
    }
    /**
     * @return {?}
     */
    MaxValidator.prototype.ngOnInit = function () {
        this.validator = max(this.max);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaxValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MaxValidator;
}());
MaxValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[max][formControlName],[max][formControl],[max][ngModel]',
                providers: [MAX_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
MaxValidator.ctorParameters = function () { return []; };
MaxValidator.propDecorators = {
    'max': [{ type: core.Input },],
};
var maxDate = function (value) {
    value = parseDate(value);
    if (!isDate(value) && !(value instanceof Function)) {
        throw Error('maxDate value must be or return a formatted date');
    }
    return function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ d = new Date(control.value).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d <= new Date(value).getTime() ? null : { maxDate: true };
    };
};
var MAX_DATE_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return MaxDateValidator; }),
    multi: true
};
var MaxDateValidator = (function () {
    function MaxDateValidator() {
    }
    /**
     * @return {?}
     */
    MaxDateValidator.prototype.ngOnInit = function () {
        this.validator = maxDate(this.maxDate);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MaxDateValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MaxDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MaxDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MaxDateValidator;
}());
MaxDateValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
                providers: [MAX_DATE_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
MaxDateValidator.ctorParameters = function () { return []; };
MaxDateValidator.propDecorators = {
    'maxDate': [{ type: core.Input },],
};
var min = function (value) {
    return function (control) {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = +control.value;
        return v >= +value ? null : { actualValue: v, requiredValue: +value, min: true };
    };
};
var MIN_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return MinValidator; }),
    multi: true
};
var MinValidator = (function () {
    function MinValidator() {
    }
    /**
     * @return {?}
     */
    MinValidator.prototype.ngOnInit = function () {
        this.validator = min(this.min);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MinValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MinValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MinValidator;
}());
MinValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[min][formControlName],[min][formControl],[min][ngModel]',
                providers: [MIN_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
MinValidator.ctorParameters = function () { return []; };
MinValidator.propDecorators = {
    'min': [{ type: core.Input },],
};
var minDate = function (value) {
    value = parseDate(value);
    if (!isDate(value) && !(value instanceof Function)) {
        throw Error('minDate value must be or return a formatted date');
    }
    return function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ d = new Date(control.value).getTime();
        if (!isDate(d)) {
            return { value: true };
        }
        if (value instanceof Function) {
            value = value();
        }
        return d >= new Date(value).getTime() ? null : { minDate: true };
    };
};
var MIN_DATE_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return MinDateValidator; }),
    multi: true
};
var MinDateValidator = (function () {
    function MinDateValidator() {
    }
    /**
     * @return {?}
     */
    MinDateValidator.prototype.ngOnInit = function () {
        this.validator = minDate(this.minDate);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    MinDateValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    MinDateValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    MinDateValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MinDateValidator;
}());
MinDateValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
                providers: [MIN_DATE_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
MinDateValidator.ctorParameters = function () { return []; };
MinDateValidator.propDecorators = {
    'minDate': [{ type: core.Input },],
};
var notEqual = function (val) {
    return function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = control.value;
        return val !== v ? null : { notEqual: true };
    };
};
var NOT_EQUAL_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return NotEqualValidator; }),
    multi: true
};
var NotEqualValidator = (function () {
    function NotEqualValidator() {
    }
    /**
     * @return {?}
     */
    NotEqualValidator.prototype.ngOnInit = function () {
        this.validator = notEqual(this.notEqual);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    NotEqualValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    NotEqualValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    NotEqualValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return NotEqualValidator;
}());
NotEqualValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
                providers: [NOT_EQUAL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
NotEqualValidator.ctorParameters = function () { return []; };
NotEqualValidator.propDecorators = {
    'notEqual': [{ type: core.Input },],
};
var notEqualTo = function (notEqualControl) {
    var /** @type {?} */ subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var /** @type {?} */ v = control.value;
        return notEqualControl.value !== v ? null : { notEqualTo: true };
    };
};
var NOT_EQUAL_TO_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return NotEqualToValidator; }),
    multi: true
};
var NotEqualToValidator = (function () {
    function NotEqualToValidator() {
    }
    /**
     * @return {?}
     */
    NotEqualToValidator.prototype.ngOnInit = function () {
        this.validator = notEqualTo(this.notEqualTo);
    };
    /**
     * @param {?} c
     * @return {?}
     */
    NotEqualToValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    return NotEqualToValidator;
}());
NotEqualToValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
                providers: [NOT_EQUAL_TO_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
NotEqualToValidator.ctorParameters = function () { return []; };
NotEqualToValidator.propDecorators = {
    'notEqualTo': [{ type: core.Input },],
};
var number = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};
var NUMBER_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return NumberValidator; }),
    multi: true
};
var NumberValidator = (function () {
    function NumberValidator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    NumberValidator.prototype.validate = function (c) {
        return number(c);
    };
    return NumberValidator;
}());
NumberValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[number][formControlName],[number][formControl],[number][ngModel]',
                providers: [NUMBER_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
NumberValidator.ctorParameters = function () { return []; };
var property = function (value) {
    return function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ obj = control.value;
        return obj[value] != null ? null : { hasProperty: true, property: value };
    };
};
var PROPERTY_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return PropertyValidator; }),
    multi: true
};
var PropertyValidator = (function () {
    function PropertyValidator() {
    }
    /**
     * @return {?}
     */
    PropertyValidator.prototype.ngOnInit = function () {
        this.validator = property(this.property);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    PropertyValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'property') {
                this.validator = property(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    PropertyValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    PropertyValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return PropertyValidator;
}());
PropertyValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[property][formControlName],[property][formControl],[property][ngModel]',
                providers: [PROPERTY_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
PropertyValidator.ctorParameters = function () { return []; };
PropertyValidator.propDecorators = {
    'property': [{ type: core.Input },],
};
var range = function (value) {
    return function (control) {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = +control.value;
        return v >= value[0] && v <= value[1] ? null : { actualValue: v, requiredValue: value, range: true };
    };
};
var RANGE_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return RangeValidator; }),
    multi: true
};
var RangeValidator = (function () {
    function RangeValidator() {
    }
    /**
     * @return {?}
     */
    RangeValidator.prototype.ngOnInit = function () {
        this.validator = range(this.range);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    RangeValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    RangeValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return RangeValidator;
}());
RangeValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[range][formControlName],[range][formControl],[range][ngModel]',
                providers: [RANGE_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
RangeValidator.ctorParameters = function () { return []; };
RangeValidator.propDecorators = {
    'range': [{ type: core.Input },],
};
var rangeLength = function (value) {
    return function (control) {
        if (!isPresent(value)) {
            return null;
        }
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = control.value;
        return v.length >= value[0] && v.length <= value[1] ? null : { rangeLength: true };
    };
};
var RANGE_LENGTH_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return RangeLengthValidator; }),
    multi: true
};
var RangeLengthValidator = (function () {
    function RangeLengthValidator() {
    }
    /**
     * @return {?}
     */
    RangeLengthValidator.prototype.ngOnInit = function () {
        this.validator = rangeLength(this.rangeLength);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    RangeLengthValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    RangeLengthValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    RangeLengthValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return RangeLengthValidator;
}());
RangeLengthValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
                providers: [RANGE_LENGTH_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
RangeLengthValidator.ctorParameters = function () { return []; };
RangeLengthValidator.propDecorators = {
    'rangeLength': [{ type: core.Input },],
};
var url = function (control) {
    if (isPresent(forms.Validators.required(control))) {
        return null;
    }
    var /** @type {?} */ v = control.value;
    /* tslint:disable */
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
    /* tslint:enable */
};
var URL_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return UrlValidator; }),
    multi: true
};
var UrlValidator = (function () {
    function UrlValidator() {
    }
    /**
     * @param {?} c
     * @return {?}
     */
    UrlValidator.prototype.validate = function (c) {
        return url(c);
    };
    return UrlValidator;
}());
UrlValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[url][formControlName],[url][formControl],[url][ngModel]',
                providers: [URL_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
UrlValidator.ctorParameters = function () { return []; };
var uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
var uuid = function (version) {
    return function (control) {
        if (isPresent(forms.Validators.required(control))) {
            return null;
        }
        var /** @type {?} */ v = control.value;
        var /** @type {?} */ pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};
var UUID_VALIDATOR = {
    provide: forms.NG_VALIDATORS,
    useExisting: core.forwardRef(function () { return UUIDValidator; }),
    multi: true
};
var UUIDValidator = (function () {
    function UUIDValidator() {
    }
    /**
     * @return {?}
     */
    UUIDValidator.prototype.ngOnInit = function () {
        this.validator = uuid(this.uuid);
    };
    /**
     * @param {?} changes
     * @return {?}
     */
    UUIDValidator.prototype.ngOnChanges = function (changes) {
        for (var /** @type {?} */ key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
                if (this.onChange) {
                    this.onChange();
                }
            }
        }
    };
    /**
     * @param {?} c
     * @return {?}
     */
    UUIDValidator.prototype.validate = function (c) {
        return this.validator(c);
    };
    /**
     * @param {?} fn
     * @return {?}
     */
    UUIDValidator.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return UUIDValidator;
}());
UUIDValidator.decorators = [
    { type: core.Directive, args: [{
                selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
                providers: [UUID_VALIDATOR]
            },] },
];
/**
 * @nocollapse
 */
UUIDValidator.ctorParameters = function () { return []; };
UUIDValidator.propDecorators = {
    'uuid': [{ type: core.Input },],
};
var CUSTOM_FORM_DIRECTIVES = [
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
var CustomFormsModule = (function () {
    function CustomFormsModule() {
    }
    return CustomFormsModule;
}());
CustomFormsModule.decorators = [
    { type: core.NgModule, args: [{
                declarations: [CUSTOM_FORM_DIRECTIVES],
                exports: [CUSTOM_FORM_DIRECTIVES]
            },] },
];
/**
 * @nocollapse
 */
CustomFormsModule.ctorParameters = function () { return []; };
var CustomValidators = {
    base64: base64,
    creditCard: creditCard,
    date: date,
    dateISO: dateISO,
    digits: digits,
    email: email,
    equal: equal,
    equalTo: equalTo,
    gt: gt,
    gte: gte,
    json: json,
    lt: lt,
    lte: lte,
    max: max,
    maxDate: maxDate,
    min: min,
    minDate: minDate,
    notEqual: notEqual,
    notEqualTo: notEqualTo,
    number: number,
    property: property,
    range: range,
    rangeLength: rangeLength,
    url: url,
    uuid: uuid
};

exports.CustomFormsModule = CustomFormsModule;
exports.CustomValidators = CustomValidators;
exports.ɵz = Base64Validator;
exports.ɵa = base64;
exports.ɵba = CreditCardValidator;
exports.ɵb = creditCard;
exports.ɵbb = DateValidator;
exports.ɵc = date;
exports.ɵbc = DateISOValidator;
exports.ɵd = dateISO;
exports.ɵbd = DigitsValidator;
exports.ɵe = digits;
exports.ɵbe = EmailValidator;
exports.ɵf = email;
exports.ɵbf = EqualValidator;
exports.ɵg = equal;
exports.ɵbg = EqualToValidator;
exports.ɵh = equalTo;
exports.ɵbh = GreaterThanValidator;
exports.ɵi = gt;
exports.ɵbi = GreaterThanEqualValidator;
exports.ɵj = gte;
exports.ɵbj = JSONValidator;
exports.ɵk = json;
exports.ɵbk = LessThanValidator;
exports.ɵl = lt;
exports.ɵbl = LessThanEqualValidator;
exports.ɵm = lte;
exports.ɵbm = MaxValidator;
exports.ɵn = max;
exports.ɵbn = MaxDateValidator;
exports.ɵo = maxDate;
exports.ɵbo = MinValidator;
exports.ɵp = min;
exports.ɵbp = MinDateValidator;
exports.ɵq = minDate;
exports.ɵbq = NotEqualValidator;
exports.ɵr = notEqual;
exports.ɵbr = NotEqualToValidator;
exports.ɵs = notEqualTo;
exports.ɵbs = NumberValidator;
exports.ɵt = number;
exports.ɵbt = PropertyValidator;
exports.ɵu = property;
exports.ɵbu = RangeValidator;
exports.ɵv = range;
exports.ɵbv = RangeLengthValidator;
exports.ɵw = rangeLength;
exports.ɵbw = UrlValidator;
exports.ɵx = url;
exports.ɵbx = UUIDValidator;
exports.ɵy = uuid;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng4-validators.umd.js.map
