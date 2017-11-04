import { FormControl } from '@angular/forms';

import { equalTo } from './validator';

describe('EqualTo', () => {
  const error = {equalTo: true};

  it('"aaa" and "aaa" should be equalTo', () => {
    const control = new FormControl('aaa');
    const control1 = new FormControl('aaa');

    expect(equalTo(control1)(control)).toBeNull();
  });

  it('"aaa" and "bbb" should not be equalTo', () => {
    const control = new FormControl('aaa');
    const control1 = new FormControl('bbb');

    expect(equalTo(control1)(control)).toEqual(error);
  });
});
