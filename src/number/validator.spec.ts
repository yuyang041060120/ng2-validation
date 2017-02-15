import { FormControl } from '@angular/forms';

import { number } from './';

describe('Number', () => {
  let control: FormControl;

  it('"23" should equal to "null"', () => {
    control = new FormControl('23');
    expect(number(control)).toBeNull()
  });

  it('"23.3" should equal to "null"', () => {
    control = new FormControl('23.3');
    expect(number(control)).toBeNull()
  });

  it('"23a" should equal to "{number: true}"', () => {
    control = new FormControl('23a');
    expect(number(control)).toEqual({number: true});
  });

  it('"23." should equal to "{number: true}"', () => {
    control = new FormControl('23.');
    expect(number(control)).toEqual({number: true});
  });
});
