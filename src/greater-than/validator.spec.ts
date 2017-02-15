import { FormControl } from '@angular/forms';

import { gt } from './';

describe('GT', () => {
  const error = {gt: true};

  it('5 should be gt 3', () => {
    let control = new FormControl(5);

    expect(gt(3)(control)).toBeNull();
  });

  it('3 should not be gt 5', () => {
    let control = new FormControl(3);

    expect(gt(5)(control)).toEqual(error);
  });
});
