import { FormControl } from '@angular/forms';

import { uuid } from './';

describe('Uuid', () => {

  it('"abc" should not be uuid', () => {
    const control = new FormControl('abc');
    expect(uuid('4')(control)).toEqual({uuid: true});
  });
});
