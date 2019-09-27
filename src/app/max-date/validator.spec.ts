import { FormControl } from '@angular/forms';

import { maxDate } from './validator';

describe('MaxDate', () => {
  let control: FormControl;

  it('"" should equal to "null"', () => {
    control = new FormControl('');
    expect(maxDate('2016-09-09')(control)).toBeNull();
  });

  it('"2016-09-10" should equal to "{maxDate: true, reason: \'xxx\'}"', () => {
    control = new FormControl('2016-09-10');
    expect(maxDate('2016-09-09')(control)).toEqual({ maxDate: { value: '2016-09-09', control: undefined } });
  });

  it('"2016-09-08" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    expect(maxDate('2016-09-09')(control)).toBeNull();
  });

  it('"Date(2016-09-10)" should equal to "{maxDate: true, reason: \'xxx\'}"', () => {
    const obj = new Date('2016-09-09');
    control = new FormControl('2016-09-10');
    expect(maxDate(obj)(control)).toEqual({ maxDate: { value: obj, control: undefined } });
  });

  it('"Date(2016-09-08)" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    expect(maxDate(new Date('2016-09-09'))(control)).toBeNull();
  });

  it('"Date(2016-09-10)" should equal to "{maxDate: true, reason: \'xxx\'}"', () => {
    const obj = () => new Date('2016-09-09');
    control = new FormControl('2016-09-10');
    expect(maxDate(obj)(control)).toEqual({ maxDate: { value: obj, control: undefined } });
  });

  it('"Date(2016-09-08)" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    expect(maxDate(() => new Date('2016-09-09'))(control)).toBeNull();
  });

  it('Date control object { year: 2018, month: 10, day: 11} should equal to "{maxDate: true, reason: \'xxx\'}"', () => {
    const obj = new FormControl('2017-10-01');
    control = new FormControl({ year: 2018, month: 10, day: 11 });
    expect(maxDate(obj)(control)).toEqual({ maxDate: { value: obj.value, control: obj } });
  });

  it('Date control object { year: 2016, month: 10, day: 11} should equal to "null"', () => {
    const obj = { year: 2017, month: 10, day: 11 };
    control = new FormControl({ year: 2016, month: 10, day: 11 });
    expect(maxDate(obj)(control)).toBeNull();
  });

  it('Date(2017-11-01) should equal to "null"', () => {
    const obj = { year: 2017, month: 11, day: 11 };
    control = new FormControl('2017-10-01');
    expect(maxDate(obj)(control)).toBeNull();
  });

  it('Date(2017-11-01) should equal to "{maxDate: true, reason: \'xxx\'}"', () => {
    const obj = { year: 2017, month: 10, day: 11 };
    control = new FormControl('2017-11-01');
    expect(maxDate(obj)(control)).toEqual({ maxDate: { value: obj, control: undefined } });
  });

  it('Date form control should equal to "null"', () => {
    const control2 = new FormControl('2018-01-01');
    control = new FormControl('2017-11-01');
    expect(maxDate(control2)(control)).toBeNull();
  });

  it('Date form control should equal to "{maxDate: true, reason: \'xxx\'}"', () => {
    const control2 = new FormControl('2017-01-01');
    control = new FormControl('2017-11-01');
    expect(maxDate(control2)(control)).toEqual({ maxDate: { value: control2.value, control: control2 } });
  });
});
