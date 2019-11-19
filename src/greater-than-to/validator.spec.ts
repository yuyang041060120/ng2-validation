import { FormControl } from '@angular/forms';

import { gtTo } from './';

describe('GreatThanTo', () => {
  const error = {equalTo: true};

  it('5 should be gtTo to 4', () => {
    let control = new FormControl(5);
    let control1 = new FormControl(4);

    expect(gtTo(control1)(control)).toBeNull();
  });
});
