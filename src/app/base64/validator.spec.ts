import { FormControl } from '@angular/forms';

import { base64 } from './validator';

describe('Base64', () => {
  const error = {base64: true};

  it('"ZGFua29nYWk=" should be base64', () => {
    const control = new FormControl('ZGFua29nYWk=');
    expect(base64(control)).toBeNull();
  });

  it('"ZGFua" should not be base64', () => {
    const control = new FormControl('ZGFua');
    expect(base64(control)).toEqual(error);
  });
});
