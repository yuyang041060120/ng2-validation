import { FormControl } from '@angular/forms';

import { minDate } from './';

describe('MinDate', () => {
  let control: FormControl;

  it('"" should equal to "null"', () => {
    control = new FormControl('');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('"2016-09-08" should equal to "{minDate: true}"', () => {
    control = new FormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({minDate: true});
  });

  it('"2016-09-10" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('Date("2016-09-08)" should equal to "{minDate: true}"', () => {
    control = new FormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({minDate: true});
  });

  it('"Date(2016-09-10)" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('() => Date("2016-09-08)" should equal to "{minDate: true}"', () => {
    control = new FormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({minDate: true});
  });

  it('"() => Date(2016-09-10)" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('Date object year-month-day should equal to "null"', () => {
    const obj = { year: 2018, month: 10, day: 11};
    control = new FormControl(obj);
    expect(minDate('2017-09-01')(control)).toBeNull();
  });

  it('Date object year-month-day should equal to "{minDate: true}"', () => {
    const obj = { year: 2017, month: 10, day: 11};
    control = new FormControl(obj);
    expect(minDate('2017-11-01')(control)).toEqual({minDate: true});
  });
});

