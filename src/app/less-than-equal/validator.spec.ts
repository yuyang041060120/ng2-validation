import { FormControl } from '@angular/forms';

import { lte } from './validator';

describe('LTE', () => {
  const error = {lte: true};

  it('3 should be lte 5', () => {
    const control = new FormControl(3);
    expect(lte(5)(control)).toBeNull();
  });

  it('5 should be lte 5', () => {
    const control = new FormControl(5);
    expect(lte(5)(control)).toBeNull();
  });

  it('5 should not be lte 3', () => {
    const control = new FormControl(5);
    expect(lte(3)(control)).toEqual(error);
  });
});
