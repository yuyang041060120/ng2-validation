import { FormControl } from '@angular/forms';

import { min } from './validator';

describe('Min', () => {
  it('6 should be over 5', () => {
    const control = new FormControl(6);

    expect(min(5)(control)).toBeNull();
  });

  it('9 should not be over 10', () => {
    const control = new FormControl(9);

    expect(min(10)(control)).toEqual({min: true, actualValue: 9, requiredValue: 10});
  });
});
