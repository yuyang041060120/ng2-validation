import { FormControl, ValidatorFn } from '@angular/forms';

import { url } from './validator';

describe('Url', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = url;
  });

  it('"http://www.test.com" should equal to "null"', () => {
    control = new FormControl('http://www.test.com');
    expect(validator(control)).toBeNull();
  });

  it('"https://www.test.com" should equal to "null"', () => {
    control = new FormControl('https://www.test.com');
    expect(validator(control)).toBeNull();
  });

  it('"23a" should equal to "{url: true}"', () => {
    control = new FormControl('23a');
    expect(validator(control)).toEqual({url: true});
  });
});
