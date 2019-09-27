import { FormControl } from '@angular/forms';

import { creditCard } from './validator';

describe('CreditCard', () => {
  const error = {creditCard: true};

  it('"378282246310005" should be creditCard', () => {
    const control = new FormControl('378282246310005');
    expect(creditCard(control)).toBeNull();
  });

  it('"37828224631000" should not be creditCard', () => {
    const control = new FormControl('37828224631000');
    expect(creditCard(control)).toEqual(error);
  });

  it('"3782822463100056" should not be creditCard', () => {
    const control = new FormControl('3782822463100056');
    expect(creditCard(control)).toEqual(error);
  });
});
