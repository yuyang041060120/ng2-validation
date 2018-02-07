import { FormControl } from '@angular/forms';

import { uuid } from './';

describe('Uuid', () => {
    // it('"AAAAAAAA-BBBB-3CCCC-DDDD-EEEEEEEEEEEE" should be uuid', () => {
    //   let control = new FormControl('AAAAAAAA-BBBB-3CCCC-DDDD-EEEEEEEEEEEE');
    //   expect(uuid('3')(control)).toBeNull();
    // });

    it('"abc" should not be uuid', () => {
        let control = new FormControl('abc');
        expect(uuid('4')(control)).toEqual({ uuid: true });
    });
});
