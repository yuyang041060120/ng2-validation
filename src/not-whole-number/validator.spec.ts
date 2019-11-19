import { FormControl } from '@angular/forms';

import { notWholeNumber } from './';

describe('NotWholeNumber', () => {
  let control: FormControl;

  it('"23.3" should equal to "null"', () => {
    control = new FormControl('23.3');
    expect(notWholeNumber(control)).toBeNull()
  });
    
  it('"23" should equal to "{notWholeNumber: true}"', () => {
    control = new FormControl('23');
    expect(notWholeNumber(control)).toEqual({notWholeNumber: true});
  });

  it('"23a" should equal to "{notWholeNumber: true}"', () => {
    control = new FormControl('23a');
    expect(notWholeNumber(control)).toEqual({notWholeNumber: true});
  });

  it('"23." should equal to "{notWholeNumber: true}"', () => {
    control = new FormControl('23.');
    expect(notWholeNumber(control)).toEqual({notWholeNumber: true});
  });
});
