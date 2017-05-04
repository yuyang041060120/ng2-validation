(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('@angular/core'), require('@angular/forms'), require('libphonenumber-js')) :
	typeof define === 'function' && define.amd ? define(['exports', '@angular/core', '@angular/forms', 'libphonenumber-js'], factory) :
	(factory((global.ng = global.ng || {}, global.ng.validation = global.ng.validation || {}),global.ng.core,global.ng.forms,global.libphonenumberJs));
}(this, (function (exports,_angular_core,_angular_forms,libphonenumberJs) { 'use strict';

function __decorate(decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
}

function __metadata(k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
}

var BASE64_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return Base64Validator$$1; }),
    multi: true
};
var Base64Validator$$1 = (function () {
    function Base64Validator$$1() {
    }
    Base64Validator$$1.prototype.validate = function (c) {
        return base64(c);
    };
    return Base64Validator$$1;
}());
Base64Validator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[base64][formControlName],[base64][formControl],[base64][ngModel]',
        providers: [BASE64_VALIDATOR]
    })
], Base64Validator$$1);

function isPresent(obj) {
    return obj !== undefined && obj !== null;
}
function isDate(obj) {
    return !/Invalid|NaN/.test(new Date(obj).toString());
}

var base64 = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:[A-Z0-9+\/]{4})*(?:[A-Z0-9+\/]{2}==|[A-Z0-9+\/]{3}=|[A-Z0-9+\/]{4})$/i.test(v) ? null : { 'base64': true };
};

var CREDIT_CARD_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return CreditCardValidator$$1; }),
    multi: true
};
var CreditCardValidator$$1 = (function () {
    function CreditCardValidator$$1() {
    }
    CreditCardValidator$$1.prototype.validate = function (c) {
        return creditCard(c);
    };
    return CreditCardValidator$$1;
}());
CreditCardValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[creditCard][formControlName],[creditCard][formControl],[creditCard][ngModel]',
        providers: [CREDIT_CARD_VALIDATOR]
    })
], CreditCardValidator$$1);

var creditCard = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    var sanitized = v.replace(/[^0-9]+/g, '');
    // problem with chrome
    if (!(/^(?:4[0-9]{12}(?:[0-9]{3})?|5[1-5][0-9]{14}|6(?:011|5[0-9][0-9])[0-9]{12}|3[47][0-9]{13}|3(?:0[0-5]|[68][0-9])[0-9]{11}|(?:2131|1800|35\d{3})\d{11})$/.test(sanitized))) {
        return { creditCard: true };
    }
    var sum = 0;
    var digit;
    var tmpNum;
    var shouldDouble;
    for (var i = sanitized.length - 1; i >= 0; i--) {
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

var DATE_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return DateValidator$$1; }),
    multi: true
};
var DateValidator$$1 = (function () {
    function DateValidator$$1() {
    }
    DateValidator$$1.prototype.validate = function (c) {
        return date(c);
    };
    return DateValidator$$1;
}());
DateValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[date][formControlName],[date][formControl],[date][ngModel]',
        providers: [DATE_VALIDATOR]
    })
], DateValidator$$1);

var date = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    return isDate(v) ? null : { date: true };
};

var DATE_ISO_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return DateISOValidator$$1; }),
    multi: true
};
var DateISOValidator$$1 = (function () {
    function DateISOValidator$$1() {
    }
    DateISOValidator$$1.prototype.validate = function (c) {
        return dateISO(c);
    };
    return DateISOValidator$$1;
}());
DateISOValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[dateISO][formControlName],[dateISO][formControl],[dateISO][ngModel]',
        providers: [DATE_ISO_VALIDATOR]
    })
], DateISOValidator$$1);

var dateISO = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    return /^\d{4}[\/\-](0?[1-9]|1[012])[\/\-](0?[1-9]|[12][0-9]|3[01])$/.test(v) ? null : { dateISO: true };
};

var DIGITS_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return DigitsValidator$$1; }),
    multi: true
};
var DigitsValidator$$1 = (function () {
    function DigitsValidator$$1() {
    }
    DigitsValidator$$1.prototype.validate = function (c) {
        return digits(c);
    };
    return DigitsValidator$$1;
}());
DigitsValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[digits][formControlName],[digits][formControl],[digits][ngModel]',
        providers: [DIGITS_VALIDATOR]
    })
], DigitsValidator$$1);

var digits = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    return /^\d+$/.test(v) ? null : { digits: true };
};

var EMAIL_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return EmailValidator$$1; }),
    multi: true
};
var EmailValidator$$1 = (function () {
    function EmailValidator$$1() {
    }
    EmailValidator$$1.prototype.validate = function (c) {
        return email(c);
    };
    return EmailValidator$$1;
}());
EmailValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[email][formControlName],[email][formControl],[email][ngModel]',
        providers: [EMAIL_VALIDATOR]
    })
], EmailValidator$$1);

var email = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(v) ? null : { 'email': true };
};

var EQUAL_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return EqualValidator$$1; }),
    multi: true
};
var EqualValidator$$1 = (function () {
    function EqualValidator$$1() {
    }
    EqualValidator$$1.prototype.ngOnInit = function () {
        this.validator = equal(this.equal);
    };
    EqualValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'equal') {
                this.validator = equal(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    EqualValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    EqualValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return EqualValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Object)
], EqualValidator$$1.prototype, "equal", void 0);
EqualValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[equal][formControlName],[equal][formControl],[equal][ngModel]',
        providers: [EQUAL_VALIDATOR]
    })
], EqualValidator$$1);

var equal = function (val) {
    return function (control) {
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = control.value;
        return val === v ? null : { equal: true };
    };
};

var EQUAL_TO_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return EqualToValidator$$1; }),
    multi: true
};
var EqualToValidator$$1 = (function () {
    function EqualToValidator$$1() {
    }
    EqualToValidator$$1.prototype.ngOnInit = function () {
        this.validator = equalTo(this.equalTo);
    };
    EqualToValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    return EqualToValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", typeof (_a = typeof _angular_forms.FormControl !== "undefined" && _angular_forms.FormControl) === "function" && _a || Object)
], EqualToValidator$$1.prototype, "equalTo", void 0);
EqualToValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[equalTo][formControlName],[equalTo][formControl],[equalTo][ngModel]',
        providers: [EQUAL_TO_VALIDATOR]
    })
], EqualToValidator$$1);
var _a;

var equalTo = function (equalControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            equalControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return equalControl.value === v ? null : { equalTo: true };
    };
};

var GREATER_THAN_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return GreaterThanValidator$$1; }),
    multi: true
};
var GreaterThanValidator$$1 = (function () {
    function GreaterThanValidator$$1() {
    }
    GreaterThanValidator$$1.prototype.ngOnInit = function () {
        this.validator = gt(this.gt);
    };
    GreaterThanValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gt') {
                this.validator = gt(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    GreaterThanValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], GreaterThanValidator$$1.prototype, "gt", void 0);
GreaterThanValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
        providers: [GREATER_THAN_VALIDATOR]
    })
], GreaterThanValidator$$1);

var gt = function (gt) {
    return function (control) {
        if (!isPresent(gt))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = +control.value;
        return v > +gt ? null : { gt: true };
    };
};

var GREATER_THAN_EQUAL_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return GreaterThanEqualValidator$$1; }),
    multi: true
};
var GreaterThanEqualValidator$$1 = (function () {
    function GreaterThanEqualValidator$$1() {
    }
    GreaterThanEqualValidator$$1.prototype.ngOnInit = function () {
        this.validator = gte(this.gte);
    };
    GreaterThanEqualValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'gte') {
                this.validator = gte(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    GreaterThanEqualValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    GreaterThanEqualValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return GreaterThanEqualValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], GreaterThanEqualValidator$$1.prototype, "gte", void 0);
GreaterThanEqualValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[gte][formControlName],[gte][formControl],[gte][ngModel]',
        providers: [GREATER_THAN_EQUAL_VALIDATOR]
    })
], GreaterThanEqualValidator$$1);

var gte = function (gte) {
    return function (control) {
        if (!isPresent(gte))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= +gte ? null : { gte: true };
    };
};

var JSON_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return JSONValidator$$1; }),
    multi: true
};
var JSONValidator$$1 = (function () {
    function JSONValidator$$1() {
    }
    JSONValidator$$1.prototype.validate = function (c) {
        return json(c);
    };
    return JSONValidator$$1;
}());
JSONValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[json][formControlName],[json][formControl],[json][ngModel]',
        providers: [JSON_VALIDATOR]
    })
], JSONValidator$$1);

var json = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    try {
        var obj = JSON.parse(v);
        if (Boolean(obj) && typeof obj === 'object') {
            return null;
        }
    }
    catch (e) {
    }
    return { json: true };
};

var LESS_THAN_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return LessThanValidator$$1; }),
    multi: true
};
var LessThanValidator$$1 = (function () {
    function LessThanValidator$$1() {
    }
    LessThanValidator$$1.prototype.ngOnInit = function () {
        this.validator = lt(this.lt);
    };
    LessThanValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lt') {
                this.validator = lt(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    LessThanValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], LessThanValidator$$1.prototype, "lt", void 0);
LessThanValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[lt][formControlName],[lt][formControl],[lt][ngModel]',
        providers: [LESS_THAN_VALIDATOR]
    })
], LessThanValidator$$1);

var lt = function (lt) {
    return function (control) {
        if (!isPresent(lt))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = +control.value;
        return v < +lt ? null : { lt: true };
    };
};

var LESS_THAN_EQUAL_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return LessThanEqualValidator$$1; }),
    multi: true
};
var LessThanEqualValidator$$1 = (function () {
    function LessThanEqualValidator$$1() {
    }
    LessThanEqualValidator$$1.prototype.ngOnInit = function () {
        this.validator = lte(this.lte);
    };
    LessThanEqualValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'lte') {
                this.validator = lte(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    LessThanEqualValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    LessThanEqualValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return LessThanEqualValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], LessThanEqualValidator$$1.prototype, "lte", void 0);
LessThanEqualValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[lte][formControlName],[lte][formControl],[lte][ngModel]',
        providers: [LESS_THAN_EQUAL_VALIDATOR]
    })
], LessThanEqualValidator$$1);

var lte = function (lte) {
    return function (control) {
        if (!isPresent(lte))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = +control.value;
        return v <= +lte ? null : { lte: true };
    };
};

var MAX_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return MaxValidator$$1; }),
    multi: true
};
var MaxValidator$$1 = (function () {
    function MaxValidator$$1() {
    }
    MaxValidator$$1.prototype.ngOnInit = function () {
        this.validator = max(this.max);
    };
    MaxValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'max') {
                this.validator = max(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MaxValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MaxValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], MaxValidator$$1.prototype, "max", void 0);
MaxValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[max][formControlName],[max][formControl],[max][ngModel]',
        providers: [MAX_VALIDATOR]
    })
], MaxValidator$$1);

var max = function (max) {
    return function (control) {
        if (!isPresent(max))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = +control.value;
        return v <= +max ? null : { actualValue: v, requiredValue: +max, max: true };
    };
};

var MAX_DATE_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return MaxDateValidator$$1; }),
    multi: true
};
var MaxDateValidator$$1 = (function () {
    function MaxDateValidator$$1() {
    }
    MaxDateValidator$$1.prototype.ngOnInit = function () {
        this.validator = maxDate(this.maxDate);
    };
    MaxDateValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'maxDate') {
                this.validator = maxDate(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MaxDateValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    MaxDateValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MaxDateValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Object)
], MaxDateValidator$$1.prototype, "maxDate", void 0);
MaxDateValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
        providers: [MAX_DATE_VALIDATOR]
    })
], MaxDateValidator$$1);

var maxDate = function (maxDate) {
    if (!isDate(maxDate) && !(maxDate instanceof Function)) {
        throw Error('maxDate value must be or return a formatted date');
    }
    return function (control) {
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var d = new Date(control.value);
        if (!isDate(d))
            return { maxDate: true };
        if (maxDate instanceof Function)
            maxDate = maxDate();
        return d <= new Date(maxDate) ? null : { maxDate: true };
    };
};

var MIN_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return MinValidator$$1; }),
    multi: true
};
var MinValidator$$1 = (function () {
    function MinValidator$$1() {
    }
    MinValidator$$1.prototype.ngOnInit = function () {
        this.validator = min(this.min);
    };
    MinValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'min') {
                this.validator = min(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MinValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MinValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Number)
], MinValidator$$1.prototype, "min", void 0);
MinValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[min][formControlName],[min][formControl],[min][ngModel]',
        providers: [MIN_VALIDATOR]
    })
], MinValidator$$1);

var min = function (min) {
    return function (control) {
        if (!isPresent(min))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= +min ? null : { actualValue: v, requiredValue: +min, min: true };
    };
};

var MIN_DATE_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return MinDateValidator$$1; }),
    multi: true
};
var MinDateValidator$$1 = (function () {
    function MinDateValidator$$1() {
    }
    MinDateValidator$$1.prototype.ngOnInit = function () {
        this.validator = minDate(this.minDate);
    };
    MinDateValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'minDate') {
                this.validator = minDate(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    MinDateValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    MinDateValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return MinDateValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Object)
], MinDateValidator$$1.prototype, "minDate", void 0);
MinDateValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
        providers: [MIN_DATE_VALIDATOR]
    })
], MinDateValidator$$1);

var minDate = function (minDate) {
    if (!isDate(minDate) && !(minDate instanceof Function)) {
        throw Error('minDate value must be or return a formatted date');
    }
    return function (control) {
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var d = new Date(control.value);
        if (!isDate(d))
            return { minDate: true };
        if (minDate instanceof Function)
            minDate = minDate();
        return d >= new Date(minDate) ? null : { minDate: true };
    };
};

var NOT_EQUAL_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return NotEqualValidator$$1; }),
    multi: true
};
var NotEqualValidator$$1 = (function () {
    function NotEqualValidator$$1() {
    }
    NotEqualValidator$$1.prototype.ngOnInit = function () {
        this.validator = notEqual(this.notEqual);
    };
    NotEqualValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'notEqual') {
                this.validator = notEqual(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    NotEqualValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    NotEqualValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return NotEqualValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Object)
], NotEqualValidator$$1.prototype, "notEqual", void 0);
NotEqualValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[notEqual][formControlName],[notEqual][formControl],[notEqual][ngModel]',
        providers: [NOT_EQUAL_VALIDATOR]
    })
], NotEqualValidator$$1);

var notEqual = function (val) {
    return function (control) {
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = control.value;
        return val !== v ? null : { notEqual: true };
    };
};

var NOT_EQUAL_TO_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return NotEqualToValidator$$1; }),
    multi: true
};
var NotEqualToValidator$$1 = (function () {
    function NotEqualToValidator$$1() {
    }
    NotEqualToValidator$$1.prototype.ngOnInit = function () {
        this.validator = notEqualTo(this.notEqualTo);
    };
    NotEqualToValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    return NotEqualToValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", typeof (_a$1 = typeof _angular_forms.FormControl !== "undefined" && _angular_forms.FormControl) === "function" && _a$1 || Object)
], NotEqualToValidator$$1.prototype, "notEqualTo", void 0);
NotEqualToValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[notEqualTo][formControlName],[notEqualTo][formControl],[notEqualTo][ngModel]',
        providers: [NOT_EQUAL_TO_VALIDATOR]
    })
], NotEqualToValidator$$1);
var _a$1;

var notEqualTo = function (notEqualControl) {
    var subscribe = false;
    return function (control) {
        if (!subscribe) {
            subscribe = true;
            notEqualControl.valueChanges.subscribe(function () {
                control.updateValueAndValidity();
            });
        }
        var v = control.value;
        return notEqualControl.value !== v ? null : { notEqualTo: true };
    };
};

var NUMBER_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return NumberValidator$$1; }),
    multi: true
};
var NumberValidator$$1 = (function () {
    function NumberValidator$$1() {
    }
    NumberValidator$$1.prototype.validate = function (c) {
        return number(c);
    };
    return NumberValidator$$1;
}());
NumberValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[number][formControlName],[number][formControl],[number][ngModel]',
        providers: [NUMBER_VALIDATOR]
    })
], NumberValidator$$1);

var number = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:-?\d+|-?\d{1,3}(?:,\d{3})+)?(?:\.\d+)?$/.test(v) ? null : { 'number': true };
};

var PHONE_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return PhoneValidator$$1; }),
    multi: true
};
var PhoneValidator$$1 = (function () {
    function PhoneValidator$$1() {
    }
    PhoneValidator$$1.prototype.ngOnInit = function () {
        this.validator = phone(this.phone);
    };
    PhoneValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'phone') {
                this.validator = phone(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    PhoneValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    PhoneValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return PhoneValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", String)
], PhoneValidator$$1.prototype, "phone", void 0);
PhoneValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
        providers: [PHONE_VALIDATOR]
    })
], PhoneValidator$$1);

var phone = function (country) {
    return function (control) {
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = control.value;
        return libphonenumberJs.isValidNumber({ phone: v, country: country }) ? null : { phone: true };
    };
};

var RANGE_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return RangeValidator$$1; }),
    multi: true
};
var RangeValidator$$1 = (function () {
    function RangeValidator$$1() {
    }
    RangeValidator$$1.prototype.ngOnInit = function () {
        this.validator = range(this.range);
    };
    RangeValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'range') {
                this.validator = range(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    RangeValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return RangeValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Array)
], RangeValidator$$1.prototype, "range", void 0);
RangeValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[range][formControlName],[range][formControl],[range][ngModel]',
        providers: [RANGE_VALIDATOR]
    })
], RangeValidator$$1);

var range = function (range) {
    return function (control) {
        if (!isPresent(range))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = +control.value;
        return v >= range[0] && v <= range[1] ? null : { actualValue: v, requiredValue: range, range: true };
    };
};

var RANGE_LENGTH_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return RangeLengthValidator$$1; }),
    multi: true
};
var RangeLengthValidator$$1 = (function () {
    function RangeLengthValidator$$1() {
    }
    RangeLengthValidator$$1.prototype.ngOnInit = function () {
        this.validator = rangeLength(this.rangeLength);
    };
    RangeLengthValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'rangeLength') {
                this.validator = rangeLength(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    RangeLengthValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    RangeLengthValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return RangeLengthValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Array)
], RangeLengthValidator$$1.prototype, "rangeLength", void 0);
RangeLengthValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[rangeLength][formControlName],[rangeLength][formControl],[rangeLength][ngModel]',
        providers: [RANGE_LENGTH_VALIDATOR]
    })
], RangeLengthValidator$$1);

var rangeLength = function (rangeLength) {
    return function (control) {
        if (!isPresent(rangeLength))
            return null;
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = control.value;
        return v.length >= rangeLength[0] && v.length <= rangeLength[1] ? null : { rangeLength: true };
    };
};

var URL_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return UrlValidator$$1; }),
    multi: true
};
var UrlValidator$$1 = (function () {
    function UrlValidator$$1() {
    }
    UrlValidator$$1.prototype.validate = function (c) {
        return url(c);
    };
    return UrlValidator$$1;
}());
UrlValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[url][formControlName],[url][formControl],[url][ngModel]',
        providers: [URL_VALIDATOR]
    })
], UrlValidator$$1);

var url = function (control) {
    if (isPresent(_angular_forms.Validators.required(control)))
        return null;
    var v = control.value;
    return /^(?:(?:(?:https?|ftp):)?\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})).?)(?::\d{2,5})?(?:[/?#]\S*)?$/i.test(v) ? null : { 'url': true };
};

var UUID_VALIDATOR = {
    provide: _angular_forms.NG_VALIDATORS,
    useExisting: _angular_core.forwardRef(function () { return UUIDValidator$$1; }),
    multi: true
};
var UUIDValidator$$1 = (function () {
    function UUIDValidator$$1() {
    }
    UUIDValidator$$1.prototype.ngOnInit = function () {
        this.validator = uuid(this.uuid);
    };
    UUIDValidator$$1.prototype.ngOnChanges = function (changes) {
        for (var key in changes) {
            if (key === 'uuid') {
                this.validator = uuid(changes[key].currentValue);
                if (this.onChange)
                    this.onChange();
            }
        }
    };
    UUIDValidator$$1.prototype.validate = function (c) {
        return this.validator(c);
    };
    UUIDValidator$$1.prototype.registerOnValidatorChange = function (fn) {
        this.onChange = fn;
    };
    return UUIDValidator$$1;
}());
__decorate([
    _angular_core.Input(),
    __metadata("design:type", Object)
], UUIDValidator$$1.prototype, "uuid", void 0);
UUIDValidator$$1 = __decorate([
    _angular_core.Directive({
        selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
        providers: [UUID_VALIDATOR]
    })
], UUIDValidator$$1);

var uuids = {
    '3': /^[0-9A-F]{8}-[0-9A-F]{4}-3[0-9A-F]{3}-[0-9A-F]{4}-[0-9A-F]{12}$/i,
    '4': /^[0-9A-F]{8}-[0-9A-F]{4}-4[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    '5': /^[0-9A-F]{8}-[0-9A-F]{4}-5[0-9A-F]{3}-[89AB][0-9A-F]{3}-[0-9A-F]{12}$/i,
    'all': /^[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}$/i
};
var uuid = function (version) {
    return function (control) {
        if (isPresent(_angular_forms.Validators.required(control)))
            return null;
        var v = control.value;
        var pattern = uuids[version] || uuids.all;
        return (new RegExp(pattern)).test(v) ? null : { uuid: true };
    };
};

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
    phone: phone,
    range: range,
    rangeLength: rangeLength,
    url: url,
    uuid: uuid
};
var CUSTOM_FORM_DIRECTIVES = [
    Base64Validator$$1,
    CreditCardValidator$$1,
    DateValidator$$1,
    DateISOValidator$$1,
    DigitsValidator$$1,
    EmailValidator$$1,
    EqualValidator$$1,
    EqualToValidator$$1,
    GreaterThanValidator$$1,
    GreaterThanEqualValidator$$1,
    JSONValidator$$1,
    LessThanValidator$$1,
    LessThanEqualValidator$$1,
    MaxValidator$$1,
    MaxDateValidator$$1,
    MinValidator$$1,
    MinDateValidator$$1,
    NotEqualValidator$$1,
    NotEqualToValidator$$1,
    NumberValidator$$1,
    PhoneValidator$$1,
    RangeValidator$$1,
    RangeLengthValidator$$1,
    UrlValidator$$1,
    UUIDValidator$$1
];
exports.CustomFormsModule = (function () {
    function CustomFormsModule() {
    }
    return CustomFormsModule;
}());
exports.CustomFormsModule = __decorate([
    _angular_core.NgModule({
        declarations: [CUSTOM_FORM_DIRECTIVES],
        exports: [CUSTOM_FORM_DIRECTIVES]
    })
], exports.CustomFormsModule);

exports.CustomValidators = CustomValidators;

Object.defineProperty(exports, '__esModule', { value: true });

})));
//# sourceMappingURL=ng2-validation.umd.js.map
