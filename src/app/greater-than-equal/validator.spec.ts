import { FormControl } from '@angular/forms';

import { gte } from './validator';

describe('GTE', () => {
  const error = {gte: true};

  it('5 should be gte 3', () => {
    const control = new FormControl(5);
    expect(gte(3)(control)).toBeNull();
  });

  it('5 should be gte 5', () => {
    const control = new FormControl(5);
    expect(gte(5)(control)).toBeNull();
  });

  it('3 should not be gte 5', () => {
    const control = new FormControl(3);
    expect(gte(5)(control)).toEqual(error);
  });
});
