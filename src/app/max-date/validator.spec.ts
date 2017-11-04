import { FormControl } from '@angular/forms';

import { maxDate } from './validator';

describe('MaxDate', () => {
  let control: FormControl;

  it('"" should equal to "null"', () => {
    control = new FormControl('');
    expect(maxDate('2016-09-09')(control)).toBeNull();
  });

  it('"2016-09-10" should equal to "{maxDate: true}"', () => {
    control = new FormControl('2016-09-10');
    expect(maxDate('2016-09-09')(control)).toEqual({maxDate: true});
  });

  it('"2016-09-08" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    expect(maxDate('2016-09-09')(control)).toBeNull();
  });

  it('"Date(2016-09-10)" should equal to "{maxDate: true}"', () => {
    control = new FormControl('2016-09-10');
    expect(maxDate(new Date('2016-09-09'))(control)).toEqual({maxDate: true});
  });

  it('"Date(2016-09-08)" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    expect(maxDate(new Date('2016-09-09'))(control)).toBeNull();
  });

  it('"Date(2016-09-10)" should equal to "{maxDate: true}"', () => {
    control = new FormControl('2016-09-10');
    expect(maxDate(() => new Date('2016-09-09'))(control)).toEqual({maxDate: true});
  });

  it('"Date(2016-09-08)" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    expect(maxDate(() => new Date('2016-09-09'))(control)).toBeNull();
  });

  it('Date(2017-10-01) should equal to "null"', () => {
    const obj = { year: 2017, month: 10, day: 11};
    control = new FormControl('2017-10-01');
    expect(maxDate(obj)(control)).toBeNull();
  });

  it('Date(2017-11-01) should equal to "{maxDate: true}"', () => {
    const obj = { year: 2017, month: 10, day: 11};
    control = new FormControl('2017-11-01');
    expect(maxDate(obj)(control)).toEqual({maxDate: true});
  });
});
