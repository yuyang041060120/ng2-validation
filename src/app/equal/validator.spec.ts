import { FormControl } from '@angular/forms';

import { equal } from './';

describe('Equal', () => {
  const error = {equal: true};

  it('"aaa" and "aaa" should be equal', () => {
    let control = new FormControl('aaa');
    expect(equal('aaa')(control)).toBeNull();
  });

  it('"aaa" and "bbb" should not be email', () => {
    let control = new FormControl('bbb');
    expect(equal('aaa')(control)).toEqual(error);
  });
});
