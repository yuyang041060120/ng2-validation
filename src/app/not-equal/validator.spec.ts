import { FormControl } from '@angular/forms';

import { notEqual } from './validator';

describe('NotEqual', () => {
  const error = {notEqual: true};

  it('"aaa" and "bbb" should be notEqual', () => {
    const control = new FormControl('bbb');
    expect(notEqual('aaa')(control)).toBeNull();
  });

  it('"aaa" and "aaa" should not be notEqual', () => {
    const control = new FormControl('aaa');
    expect(notEqual('aaa')(control)).toEqual(error);
  });
});
