import { FormControl } from '@angular/forms';

import { Iban } from './validator';

describe('Iban', () => {
  const error = {iban: true};

  it('"AL35202111090000000001234567" should be Iban', () => {
    const control = new FormControl('AL35202111090000000001234567');
    expect(Iban(control)).toBeNull();
  });

  it('"BR150000CC0000000010932840814P2" should not be Iban', () => {
    const control = new FormControl('BR150000CC0000000010932840814P2');
    expect(Iban(control)).toEqual(error);
  });

  it('"C5508000000001234567899" should not be Iban', () => {
    const control = new FormControl('C5508000000001234567899');
    expect(Iban(control)).toEqual(error);
  });
});
