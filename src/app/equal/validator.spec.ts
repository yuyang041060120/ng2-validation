import { FormControl } from '@angular/forms';

import { equal } from './validator';

describe('Equal', () => {
  const error = {equal: true};

  it('"aaa" and "aaa" should be equal', () => {
    const control = new FormControl('aaa');
    expect(equal('aaa')(control)).toBeNull();
  });

  it('"aaa" and "bbb" should not be email', () => {
    const control = new FormControl('bbb');
    expect(equal('aaa')(control)).toEqual(error);
  });
});
