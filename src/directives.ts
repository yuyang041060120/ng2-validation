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

export const CUSTOM_FORM_DIRECTIVES = [
    RangeLengthValidator,
    MinValidator,
    MaxValidator,
    RangeValidator,
    DigitsValidator,
    NumberValidator,
    UrlValidator,
    EmailValidator,
    DateValidator,
    DateISOValidator
];