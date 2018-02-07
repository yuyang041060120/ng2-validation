import { FormControl } from '@angular/forms';

import { json } from './';

describe('JSON', () => {
    const error = { json: true };

    it('"{"name": "xxx"}" should be json', () => {
        let control = new FormControl('{"name": "xxx"}');
        expect(json(control)).toBeNull();
    });

    it('"123a" should not be json', () => {
        let control = new FormControl('123a');
        expect(json(control)).toEqual(error);
    });
});
