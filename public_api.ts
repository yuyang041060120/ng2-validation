import { AbstractControl, ValidatorFn } from '@angular/forms';
import { CustomFormsModule } from './src/app/index';

import { base64 } from './src/app/base64';
import { creditCard } from './src/app/credit-card';
import { date } from './src/app/date';
import { dateISO } from './src/app/date-ios';
import { digits } from './src/app/digits';
import { email } from './src/app/email';
import { equal } from './src/app/equal';
import { equalTo } from './src/app/equal-to';
import { gt } from './src/app/greater-than';
import { gte } from './src/app/greater-than-equal';
import { json } from './src/app/json';
import { lt } from './src/app/less-than';
import { lte } from './src/app/less-than-equal';
import { max } from './src/app/max';
import { maxDate } from './src/app/max-date';
import { min } from './src/app/min';
import { minDate } from './src/app/min-date';
import { notEqual } from './src/app/not-equal';
import { notEqualTo } from './src/app/not-equal-to';
import { number } from './src/app/number';
import { property } from './src/app/property';
import { range } from './src/app/range';
import { rangeLength } from './src/app/range-length';
import { url } from './src/app/url';
import { uuid } from './src/app/uuid';

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
  property,
  range,
  rangeLength,
  url,
  uuid
};

export {
  CustomFormsModule,
  CustomValidators
};
