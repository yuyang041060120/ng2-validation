import { FormControl } from '@angular/forms';

import { gt } from './validator';

describe('GT', () => {
  const error = {gt: true};

  it('5 should be gt 3', () => {
    const control = new FormControl(5);

    expect(gt(3)(control)).toBeNull();
  });

  it('3 should not be gt 5', () => {
    const control = new FormControl(3);

    expect(gt(5)(control)).toEqual(error);
  });
});
