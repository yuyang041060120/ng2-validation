import { FormControl, ValidatorFn } from '@angular/forms';

import { rangeLength } from './validator';

describe('RangeLength [4,9],', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = rangeLength([4, 9]);
  });

  it('"abc" should equal to "{rangeLength: true}"', () => {
    control = new FormControl('abc');
    expect(validator(control)).toEqual({rangeLength: true});
  });

  it('"abcd" should equal to "null"', () => {
    control = new FormControl('abcd');
    expect(validator(control)).toBeNull();
  });

  it('"abcdefghi" should equal to "null"', () => {
    control = new FormControl('abcdefghi');
    expect(validator(control)).toBeNull();
  });

  it('"abcdefghij" should equal to "{rangeLength: true}"', () => {
    control = new FormControl('abcdefghij');
    expect(validator(control)).toEqual({rangeLength: true});
  });
});
