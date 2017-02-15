import { FormControl } from '@angular/forms';

import { email } from './';

describe('Email', () => {
  const error = {email: true};

  it('"test@gmail.com" should be email', () => {
    let control = new FormControl('test@gmail.com');
    expect(email(control)).toBeNull();
  });

  it('"test@xxx" should not be email', () => {
    let control = new FormControl('test');
    expect(email(control)).toEqual(error);
  });

  it('"abc" should not be email', () => {
    let control = new FormControl('abc');
    expect(email(control)).toEqual(error);
  });
});
