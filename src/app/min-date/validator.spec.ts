import * as moment from 'moment';
import { FormControl } from '@angular/forms';
import { minDate } from './validator';


describe('MinDate', () => {
  let control: FormControl;

  it('"" should equal to "null"', () => {
    control = new FormControl('');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('"2016-09-08" should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    control = new FormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({ minDate: { value: '2016-09-09', control: undefined } });
  });

  it('"2016-09-10" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('Date("2016-09-08)" should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    control = new FormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({ minDate: { value: '2016-09-09', control: undefined } });
  });

  it('"Date(2016-09-10)" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('"Date(2016-09-10)" moment should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    expect(minDate(moment('2016-09-09'))(control)).toBeNull();
  });

  it('() => Date("2016-09-08)" should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    control = new FormControl('2016-09-08');
    expect(minDate('2016-09-09')(control)).toEqual({ minDate: { value: '2016-09-09', control: undefined } });
  });

  it('"() => Date(2016-09-10)" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    expect(minDate('2016-09-09')(control)).toBeNull();
  });

  it('Date object { year: 2017, month: 10, day: 11} should equal to "null"', () => {
    const obj = { year: 2017, month: 10, day: 11 };
    control = new FormControl('2017-11-01');
    expect(minDate(obj)(control)).toBeNull();
  });

  it('Date control object { year: 2017, month: 10, day: 11} should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    const obj = new FormControl('2018-10-01');
    control = new FormControl({ year: 2017, month: 10, day: 11 });
    expect(minDate(obj)(control)).toEqual({ minDate: { value: obj.value, control: obj } });
  });

  it('Date control object { year: 2017, month: 10, day: 11} should equal to "null"', () => {
    const obj = { year: 2016, month: 10, day: 11 };
    control = new FormControl({ year: 2017, month: 10, day: 11 });
    expect(minDate(obj)(control)).toBeNull();
  });

  it('Date object { year: 2017, month: 11, day: 11} should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    const obj = { year: 2017, month: 11, day: 11 };
    control = new FormControl('2017-10-01');
    expect(minDate(obj)(control)).toEqual({ minDate: { value: obj, control: undefined } });
  });

  it('Date object { year: 2017, month: 11, day: 11} moment should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    const obj = { year: 2017, month: 11, day: 11 };
    control = new FormControl(moment('2017-10-01'));
    expect(minDate(obj)(control)).toEqual({ minDate: { value: obj, control: undefined } });
  });

  it('Date form control should equal to "null"', () => {
    const control2 = new FormControl('2017-01-01');
    control = new FormControl('2018-11-01');
    expect(minDate(control2)(control)).toBeNull();
  });

  it('Date form control should equal to "{minDate: true, reason: \'xxx\'}"', () => {
    const control2 = new FormControl('2018-01-01');
    control = new FormControl('2017-11-01');
    expect(minDate(control2)(control)).toEqual({ minDate: { value: control2.value, control: control2 }});
  });
});

