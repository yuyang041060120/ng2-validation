import { FormControl } from '@angular/forms';

import { min } from './';

describe('Min', () => {
  const error = {min: true};

  it('6 should be over 5', () => {
    let control = new FormControl(6);

    expect(min(5)(control)).toBeNull();
  });

  it('9 should not be over 10', () => {
    let control = new FormControl(9);

    expect(min(10)(control)).toEqual(error);
  });

  it('should ignore date-time values', () => {
    let control = new FormControl('2016-09-10');
    expect(min(<any>'2016-09-09')(control)).toBeNull();
  });
});
