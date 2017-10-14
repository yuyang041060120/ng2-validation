import { FormControl } from '@angular/forms';

import { property } from './';

describe('Object validator', () => {
  it('Input is object and has identifier', () => {
    const control = new FormControl({ id: 1 });
    expect(property('id')(control)).toBeNull();
  });

  it('Input is object and has name', () => {
    const control = new FormControl({ name: 'name' });
    expect(property('name')(control)).toBeNull();
  });

  it('Input is object and has no identifier', () => {
    const control = new FormControl({ dumb: 1 });
    expect(property('id')(control)).toEqual({ hasProperty: true, property: 'id' });
  });

  it('Input is string', () => {
    const control = new FormControl('dumb string');
    expect(property('id')(control)).toEqual({ hasProperty: true, property: 'id' });
  });
});
