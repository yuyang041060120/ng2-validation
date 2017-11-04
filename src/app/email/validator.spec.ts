import { FormControl } from '@angular/forms';

import { email } from './validator';

describe('Email', () => {
  const error = {email: true};

  it('"test@gmail.com" should be email', () => {
    const control = new FormControl('test@gmail.com');
    expect(email(control)).toBeNull();
  });

  it('"test@xxx" should not be email', () => {
    const control = new FormControl('test');
    expect(email(control)).toEqual(error);
  });

  it('"abc" should not be email', () => {
    const control = new FormControl('abc');
    expect(email(control)).toEqual(error);
  });
});
