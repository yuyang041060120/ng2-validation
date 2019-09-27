import { FormControl } from '@angular/forms';

import { json } from './validator';

describe('JSON', () => {
  const error = {json: true};

  it('"{"name": "xxx"}" should be json', () => {
    const control = new FormControl('{"name": "xxx"}');
    expect(json(control)).toBeNull();
  });

  it('"123a" should not be json', () => {
    const control = new FormControl('123a');
    expect(json(control)).toEqual(error);
  });
});
