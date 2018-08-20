import * as moment from 'moment';
import { date } from './validator';
import { FormControl } from '@angular/forms';

describe('Date', () => {
  const error = {date: true};

  it('"2013-11-12" should be date', () => {
    const control = new FormControl('2013-11-12');
    expect(date(control)).toBeNull();
  });

  it('"2013-1-12" should be date', () => {
    const control = new FormControl('2013-1-12');
    expect(date(control)).toBeNull();
  });

  it('"2013-1-1" should be date', () => {
    const control = new FormControl('2013-1-1');
    expect(date(control)).toBeNull();
  });

  it('"2013-10-1" should be date', () => {
    const control = new FormControl('2013-10-1');
    expect(date(control)).toBeNull();
  });

  it('"new Date()" should be date', () => {
    const control = new FormControl(new Date());
    expect(date(control)).toBeNull();
  });

  it('"moment(2018-07-30)" should be date', () => {
    const control = new FormControl(moment('2018-07-30'));
    expect(date(control)).toBeNull();
  });

  it('"moment(2018-01-01)" should be date', () => {
    const control = new FormControl(moment('2018-01-01'));
    expect(date(control)).toBeNull();
  });

  it('"moment(2018-12-31)" should be date', () => {
    const control = new FormControl(moment('2018-12-31'));
    expect(date(control)).toBeNull();
  });

  it('"object { year: 2017, month: 1, day: 11}" should be date', () => {
    const control = new FormControl({ year: 2017, month: 1, day: 11});
    expect(date(control)).toBeNull();
  });

  it('"object { year: 2017, month: 12, day: 11}" should be date', () => {
    const control = new FormControl({ year: 2017, month: 12, day: 11});
    expect(date(control)).toBeNull();
  });

  it('"2013-13-12" should not be date', () => {
    const control = new FormControl('2013-13-12');
    expect(date(control)).toEqual(error);
  });

  it('"20131212" should not be date', () => {
    const control = new FormControl('20131212');
    expect(date(control)).toEqual(error);
  });

  it('"moment(2018-17-56)" should not be date', () => {
    const control = new FormControl(moment('2018-17-56'));
    expect(date(control)).toEqual(error);
  });

  it('"moment(2018-13-01)" should not be date', () => {
    const control = new FormControl(moment('2018-13-01'));
    expect(date(control)).toEqual(error);
  });

  it('"object { year: 2017, month: 13, day: 11}" should not be date', () => {
    const control = new FormControl({ year: 2017, month: 13, day: 11});
    expect(date(control)).toEqual(error);
  });
});
