import { FormControl } from '@angular/forms';

import { date } from './';

describe('Date', () => {
    const error = { date: true };

    it('"2013-11-12" should be date', () => {
        let control = new FormControl('2013-11-12');
        expect(date(control)).toBeNull();
    });

    it('"new Date()" should be date', () => {
        let control = new FormControl(new Date());
        expect(date(control)).toBeNull();
    });

    it('"2013-13-12" should not be date', () => {
        let control = new FormControl('2013-13-12');
        expect(date(control)).toEqual(error);
    });

    it('"20131212" should not be date', () => {
        let control = new FormControl('20131212');
        expect(date(control)).toEqual(error);
    });
});
