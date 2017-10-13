import { FormControl } from '@angular/forms';

import { hasProperty } from './';

describe('Object validator', () => {
  it('Input is object and has identifier', () => {
    const control = new FormControl({ id: 1 });

    expect(hasProperty('id')(control)).toBeNull();
  });

  it('Input is object and has name', () => {
    const control = new FormControl({ name: 'name' });

    expect(hasProperty('name')(control)).toBeNull();
  });

  it('Input is object and has no identifier', () => {
    const control = new FormControl({ dumb: 1 });

    expect(hasProperty('id')(control)).toEqual({ object: true });
  });

  it('Input is string', () => {
    const control = new FormControl('dumb string');

    expect(hasProperty('id')(control)).toEqual({ object: true });
  });
});
