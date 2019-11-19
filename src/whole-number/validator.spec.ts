import { FormControl } from '@angular/forms';

import { wholeNumber } from './';

describe('WholeNumber', () => {
  let control: FormControl;

  it('"23" should equal to "null"', () => {
    control = new FormControl('23');
    expect(wholeNumber(control)).toBeNull()
  });

  it('"23.3" should equal to "{wholeNumber: true}"', () => {
    control = new FormControl('23.3');
    expect(wholeNumber(control)).toEqual({wholeNumber: true});
  });

  it('"23a" should equal to "{wholeNumber: true}"', () => {
    control = new FormControl('23a');
    expect(wholeNumber(control)).toEqual({wholeNumber: true});
  });

  it('"23." should equal to "{wholeNumber: true}"', () => {
    control = new FormControl('23.');
    expect(wholeNumber(control)).toEqual({wholeNumber: true});
  });
});
