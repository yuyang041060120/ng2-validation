import { FormControl } from '@angular/forms';

import { arrayLength } from './validator';

describe('ArrayLength validator', () => {
  it('Input is array', () => {
    const control = new FormControl([ 'ok' ]);
    expect(arrayLength('0')(control)).toBeNull();
  });

  it('Input not array', () => {
    const control = new FormControl({ dumb: 1 });
    expect(arrayLength('1')(control)).toEqual({ arrayLength: 1 });
  });

  it('Input is array of object and greater than 1', () => {
    const control = new FormControl([{ dumb: 1 }, { dumb: 2 }]);
    expect(arrayLength('1')(control)).toBeNull();
  });

  it('Input is array of object and less than 2', () => {
    const control = new FormControl([{ dumb: 1 }]);
    expect(arrayLength('2')(control)).toEqual({ arrayLength: 2 });
  });
});
