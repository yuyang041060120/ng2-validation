import { NgModule } from '@angular/core';

import { RangeLengthValidator } from "./directives/range-length";
import { MinValidator } from './directives/min';
import { MaxValidator } from './directives/max';
import { RangeValidator } from './directives/range';
import { DigitsValidator } from './directives/digits';
import { NumberValidator } from './directives/number';
import { UrlValidator } from './directives/url';
import { EmailValidator } from './directives/email';
import { DateValidator } from './directives/date';
import { DateISOValidator } from './directives/date-iso';
import { CreditCardValidator } from './directives/credit-card';
import { JSONValidator } from './directives/json';
import { Base64Validator } from './directives/base64';
import { PhoneValidator } from './directives/phone';
import { UUIDValidator } from './directives/uuid';
import { EqualValidator } from './directives/equal';
import { EqualToValidator } from './directives/equal-to';


const CUSTOM_FORM_DIRECTIVES = [
    RangeLengthValidator,
    MinValidator,
    MaxValidator,
    RangeValidator,
    DigitsValidator,
    NumberValidator,
    UrlValidator,
    EmailValidator,
    DateValidator,
    DateISOValidator,
    CreditCardValidator,
    JSONValidator,
    Base64Validator,
    PhoneValidator,
    UUIDValidator,
    EqualValidator,
    EqualToValidator
];

@NgModule({
    declarations: [CUSTOM_FORM_DIRECTIVES],
    exports: [CUSTOM_FORM_DIRECTIVES]
})
export class CustomFormsModule {
}
