import { NgModule } from '@angular/core';

import { Base64Validator } from './base64';
import { CreditCardValidator } from './credit-card';
import { DateValidator } from './date';
import { DateISOValidator } from './date-ios';
import { DigitsValidator } from './digits';
import { EmailValidator } from './email';
import { EqualValidator } from './equal';
import { EqualToValidator } from './equal-to';
import { GreaterThanValidator } from './greater-than';
import { GreaterThanEqualValidator } from './greater-than-equal';
import { JSONValidator } from './json';
import { LessThanValidator } from './less-than';
import { LessThanEqualValidator } from './less-than-equal';
import { MaxValidator } from './max';
import { MaxDateValidator } from './max-date';
import { MinValidator } from './min';
import { MinDateValidator } from './min-date';
import { NotEqualValidator } from './not-equal';
import { NotEqualToValidator } from './not-equal-to';
import { NumberValidator } from './number';
import { PropertyValidator } from './property';
import { RangeValidator } from './range';
import { RangeLengthValidator } from './range-length';
import { UrlValidator } from './url';
import { UUIDValidator } from './uuid';

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

@NgModule({
  declarations: [CUSTOM_FORM_DIRECTIVES],
  exports: [CUSTOM_FORM_DIRECTIVES]
})
export class CustomFormsModule { }
