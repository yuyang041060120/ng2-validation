import { FormControl } from '@angular/forms';

import { digits } from './';

describe('Digits', () => {
    const error = { digits: true };

    it('"234" should be digits', () => {
        let control = new FormControl('234');
        expect(digits(control)).toBeNull();
    });

    it('234 should be digits', () => {
        let control = new FormControl(234);
        expect(digits(control)).toBeNull();
    });

    it('"abc" should not be digits', () => {
        let control = new FormControl('abc');
        expect(digits(control)).toEqual(error);
    });

    it('"123a" should not be digits', () => {
        let control = new FormControl('123a');
        expect(digits(control)).toEqual(error);
    });
});
