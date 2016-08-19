import { FormControl, ValidatorFn } from '@angular/forms';

import { CustomValidators } from '../custom-validators';

describe('Custom Validators RangeLength [4,9],', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.rangeLength([4, 9]);
    });

    it('"abc" should equal to "{rangeLength: true}"', () => {
        control = new FormControl('abc');
        expect(validator(control)).toEqual({rangeLength: true});
    });

    it('"abcd" should equal to "null"', () => {
        control = new FormControl('abcd');
        expect(validator(control)).toBeNull();
    });

    it('"abcdefghi" should equal to "null"', () => {
        control = new FormControl('abcdefghi');
        expect(validator(control)).toBeNull();
    });

    it('"abcdefghij" should equal to "{rangeLength: true}"', () => {
        control = new FormControl('abcdefghij');
        expect(validator(control)).toEqual({rangeLength: true});
    });
});

describe('Custom Validators Min 10,', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.min(10);
    });

    it('"9" should equal to "{min: true}"', () => {
        control = new FormControl(9);
        expect(validator(control)).toEqual({min: true});
    });

    it('"10" should equal to "null"', () => {
        control = new FormControl(10);
        expect(validator(control)).toBeNull()
    });

    it('"11" should equal to "null"', () => {
        control = new FormControl(11);
        expect(validator(control)).toBeNull()
    });
});

describe('Custom Validators Max 20,', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.max(20);
    });

    it('"19" should equal to "null"', () => {
        control = new FormControl(19);
        expect(validator(control)).toBeNull()
    });

    it('"20" should equal to "null"', () => {
        control = new FormControl(20);
        expect(validator(control)).toBeNull()
    });

    it('"21" should equal to "{max: true}"', () => {
        control = new FormControl(21);
        expect(validator(control)).toEqual({max: true});
    });
});

describe('Custom Validators Range [4,9],', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.range([4, 9]);
    });

    it('"3" should equal to "{range: true}"', () => {
        control = new FormControl(3);
        expect(validator(control)).toEqual({range: true});
    });

    it('"4" should equal to "null"', () => {
        control = new FormControl(4);
        expect(validator(control)).toBeNull();
    });

    it('"9" should equal to "null"', () => {
        control = new FormControl(9);
        expect(validator(control)).toBeNull();
    });

    it('"10" should equal to "{range: true}"', () => {
        control = new FormControl(10);
        expect(validator(control)).toEqual({range: true});
    });
});

describe('Custom Validators Digits,', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.digits;
    });

    it('"23" should equal to "null"', () => {
        control = new FormControl(23);
        expect(validator(control)).toBeNull()
    });

    it('"23a" should equal to "{digits: true}"', () => {
        control = new FormControl('23a');
        expect(validator(control)).toEqual({digits: true});
    });
});

describe('Custom Validators Number,', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.number;
    });

    it('"23" should equal to "null"', () => {
        control = new FormControl('23');
        expect(validator(control)).toBeNull()
    });

    it('"23.3" should equal to "null"', () => {
        control = new FormControl('23.3');
        expect(validator(control)).toBeNull()
    });

    it('"23a" should equal to "{number: true}"', () => {
        control = new FormControl('23a');
        expect(validator(control)).toEqual({number: true});
    });

    it('"23." should equal to "{number: true}"', () => {
        control = new FormControl('23.');
        expect(validator(control)).toEqual({number: true});
    });
});

describe('Custom Validators Url,', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.url;
    });

    it('"http://www.test.com" should equal to "null"', () => {
        control = new FormControl('http://www.test.com');
        expect(validator(control)).toBeNull()
    });

    it('"https://www.test.com" should equal to "null"', () => {
        control = new FormControl('https://www.test.com');
        expect(validator(control)).toBeNull()
    });

    it('"23a" should equal to "{url: true}"', () => {
        control = new FormControl('23a');
        expect(validator(control)).toEqual({url: true});
    });
});

describe('Custom Validators Email,', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.email;
    });

    it('"tester@gmail.com" should equal to "null"', () => {
        control = new FormControl('tester@gmail.com');
        expect(validator(control)).toBeNull()
    });

    it('"testergmail" should equal to "{email: true}"', () => {
        control = new FormControl('testergmail');
        expect(validator(control)).toEqual({email: true});
    });
});

describe('Custom Validators Equal (string),', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.equal('xxx');
    });

    it('"xxx" should equal to "null"', () => {
        control = new FormControl('xxx');
        expect(validator(control)).toBeNull()
    });

    it('"yyy" should equal to "{equal: true}"', () => {
        control = new FormControl('yyy');
        expect(validator(control)).toEqual({equal: true});
    });
});

describe('Custom Validators Equal (boolean),', () => {
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        validator = CustomValidators.equal(true);
    });

    it('"xxx" should equal to "null"', () => {
        control = new FormControl(true);
        expect(validator(control)).toBeNull()
    });

    it('"yyy" should equal to "{equal: true}"', () => {
        control = new FormControl(false);
        expect(validator(control)).toEqual({equal: true});
    });
});

describe('Custom Validators EqualTo,', () => {
    let equalControl: FormControl;
    let control: FormControl;
    let validator: ValidatorFn;

    beforeEach(() => {
        equalControl = new FormControl('xxx');
        validator = CustomValidators.equalTo(equalControl);
    });

    it('"xxx" should equal to "null"', () => {
        control = new FormControl('xxx');
        expect(validator(control)).toBeNull()
    });

    it('"yyy" should equal to "{equalTo: true}"', () => {
        control = new FormControl('yyy');
        expect(validator(control)).toEqual({equalTo: true});
    });
});