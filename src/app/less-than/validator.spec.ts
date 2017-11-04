import { FormControl } from '@angular/forms';

import { lt } from './validator';

describe('LT', () => {
  const error = {lt: true};

  it('3 should be lt 5', () => {
    const control = new FormControl(3);

    expect(lt(5)(control)).toBeNull();
  });

  it('5 should not be lt 3', () => {
    const control = new FormControl(5);

    expect(lt(3)(control)).toEqual(error);
  });
});
