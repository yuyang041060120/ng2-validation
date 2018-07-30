import * as moment from 'moment';
import { date } from './validator';
import { FormControl } from '@angular/forms';

describe('Date', () => {
  const error = {date: true};

  it('"2013-11-12" should be date', () => {
    const control = new FormControl('2013-11-12');
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
});
