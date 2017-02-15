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
});

