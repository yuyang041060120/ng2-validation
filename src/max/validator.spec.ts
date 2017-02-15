import { FormControl } from '@angular/forms';

import { max } from './';

describe('Max', () => {
  const error = {max: true};

  it('1 should be under 5', () => {
    let control = new FormControl(1);

    expect(max(5)(control)).toBeNull();
  });

  it('9 should not be over 5', () => {
    let control = new FormControl(9);

    expect(max(5)(control)).toEqual(error);
  });

  it('"19" should not be over 5', () => {
    let control = new FormControl('19');

    expect(max(5)(control)).toEqual(error);
  });
});
