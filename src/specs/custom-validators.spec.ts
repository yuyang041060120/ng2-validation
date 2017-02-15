import {FormControl, FormGroup, ValidatorFn} from '@angular/forms';
import {CustomValidators} from '../custom-validators';
const using = require('jasmine-data-provider');

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

describe('Custom Validators GT 10,', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = CustomValidators.gt(10);
  });

  it('"9" should equal to "{gt: true}"', () => {
    control = new FormControl(9);
    expect(validator(control)).toEqual({gt: true});
  });

  it('"10" should equal to "{gt: true}"', () => {
    control = new FormControl(10);
    expect(validator(control)).toEqual({gt: true});
  });

  it('"11" should equal to "null"', () => {
    control = new FormControl(11);
    expect(validator(control)).toBeNull();
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

describe('Custom Validators LT 20,', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = CustomValidators.lt(20);
  });

  it('"19" should equal to "null"', () => {
    control = new FormControl(19);
    expect(validator(control)).toBeNull();
  });

  it('"20" should equal to "{lt: true}"', () => {
    control = new FormControl(20);
    expect(validator(control)).toEqual({lt: true});
  });

  it('"21" should equal to "{lt: true}"', () => {
    control = new FormControl(21);
    expect(validator(control)).toEqual({lt: true});
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

describe('Custom Validators Date,', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = CustomValidators.date;
  });

  it('"" should equal to "null"', () => {
    control = new FormControl('');
    expect(validator(control)).toBeNull();
  });

  it('"2016-13-09" should equal to "{date: true}"', () => {
    control = new FormControl('2016-13-09');
    expect(validator(control)).toEqual({date: true});
  });

  it('"2016-12-09" should equal to "null"', () => {
    control = new FormControl('2016-12-09');
    expect(validator(control)).toBeNull();
  });
});

describe('Custom Validators minDate,', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  it('"" should equal to "null"', () => {
    control = new FormControl('');
    validator = CustomValidators.minDate('2016-09-09');
    expect(validator(control)).toBeNull();
  });

  it('"2016-09-08" should equal to "{minDate: true}"', () => {
    control = new FormControl('2016-09-08');
    validator = CustomValidators.minDate('2016-09-09');
    expect(validator(control)).toEqual({minDate: true});
  });

  it('"2016-09-10" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    validator = CustomValidators.minDate('2016-09-09');
    expect(validator(control)).toBeNull();
  });

  it('Date("2016-09-08)" should equal to "{minDate: true}"', () => {
    control = new FormControl('2016-09-08');
    validator = CustomValidators.minDate(new Date('2016-09-09'));
    expect(validator(control)).toEqual({minDate: true});
  });

  it('"Date(2016-09-10)" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    validator = CustomValidators.minDate(new Date('2016-09-09'));
    expect(validator(control)).toBeNull();
  });

  it('() => Date("2016-09-08)" should equal to "{minDate: true}"', () => {
    control = new FormControl('2016-09-08');
    validator = CustomValidators.minDate(() => new Date('2016-09-09'));
    expect(validator(control)).toEqual({minDate: true});
  });

  it('"() => Date(2016-09-10)" should equal to "null"', () => {
    control = new FormControl('2016-09-10');
    validator = CustomValidators.minDate(() => new Date('2016-09-09'));
    expect(validator(control)).toBeNull();
  });
});

describe('Custom Validators maxDate,', () => {
  let control: FormControl;
  let validator: ValidatorFn;

  it('"" should equal to "null"', () => {
    control = new FormControl('');
    validator = CustomValidators.maxDate('2016-09-09');
    expect(validator(control)).toBeNull();
  });

  it('"2016-09-10" should equal to "{maxDate: true}"', () => {
    control = new FormControl('2016-09-10');
    validator = CustomValidators.maxDate('2016-09-09');
    expect(validator(control)).toEqual({maxDate: true});
  });

  it('"2016-09-08" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    validator = CustomValidators.maxDate('2016-09-09');
    expect(validator(control)).toBeNull();
  });

  it('"Date(2016-09-10)" should equal to "{maxDate: true}"', () => {
    control = new FormControl('2016-09-10');
    validator = CustomValidators.maxDate(new Date('2016-09-09'));
    expect(validator(control)).toEqual({maxDate: true});
  });

  it('"Date(2016-09-08)" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    validator = CustomValidators.maxDate(new Date('2016-09-09'));
    expect(validator(control)).toBeNull();
  });

  it('"Date(2016-09-10)" should equal to "{maxDate: true}"', () => {
    control = new FormControl('2016-09-10');
    validator = CustomValidators.maxDate(() => new Date('2016-09-09'));
    expect(validator(control)).toEqual({maxDate: true});
  });

  it('"Date(2016-09-08)" should equal to "null"', () => {
    control = new FormControl('2016-09-08');
    validator = CustomValidators.maxDate(() => new Date('2016-09-09'));
    expect(validator(control)).toBeNull();
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
  const error = {equalTo: true};

  beforeEach(() => {
    equalControl = new FormControl();
    control = new FormControl();
  });

  it('all control is empty should valid', () => {
    expect(CustomValidators.equalTo(equalControl)(control)).toBeNull();
  });

  it('control.value = "xxx" and equalControl.value is empty should equal to "{equalTo: true}"', () => {
    control.setValue('xxx');
    expect(CustomValidators.equalTo(equalControl)(control)).toEqual(error);
  });

  it('control.value = "xxx" and equalControl.value = "yyy" should equal to "{equalTo: true}"', () => {
    control.setValue('xxx');
    equalControl.setValue('yyy');
    expect(CustomValidators.equalTo(equalControl)(control)).toEqual(error);
  });

  it('control.value = "xxx" and equalControl.value = "xxx" should valid"', () => {
    control.setValue('xxx');
    equalControl.setValue('xxx');
    expect(CustomValidators.equalTo(equalControl)(control)).toBeNull();
  });

  it('control.value is empty and equalControl.value = "yyy" should equal to "{equalTo: true}"', () => {
    control.setValue('');
    equalControl.setValue('yyy');
    expect(CustomValidators.equalTo(equalControl)(control)).toEqual(error);
  });

});

describe('Custom Validators NotEqualTo,', () => {
  let notEqualControl: FormControl;
  let control: FormControl;
  const error = {notEqualTo: true};

  beforeEach(() => {
    notEqualControl = new FormControl();
    control = new FormControl();
  });

  it('all control is empty should valid', () => {
    expect(CustomValidators.notEqualTo(notEqualControl)(control)).toEqual(error);
  });

  it('control.value = "xxx" and notEqualControl.value is empty should valid', () => {
    control.setValue('xxx');
    expect(CustomValidators.notEqualTo(notEqualControl)(control)).toBeNull();
  });

  it('control.value = "xxx" and notEqualControl.value = "yyy" should valid', () => {
    control.setValue('xxx');
    notEqualControl.setValue('yyy');
    expect(CustomValidators.notEqualTo(notEqualControl)(control)).toBeNull();
  });

  it('control.value = "xxx" and notEqualControl.value = "xxx" should equal to "{notEqualTo: true}"', () => {
    control.setValue('xxx');
    notEqualControl.setValue('xxx');
    expect(CustomValidators.notEqualTo(notEqualControl)(control)).toEqual(error);
  });

  it('control.value is empty and notEqualControl.value = "yyy" should valid', () => {
    control.setValue('');
    notEqualControl.setValue('yyy');
    expect(CustomValidators.notEqualTo(notEqualControl)(control)).toBeNull();
  });

});

describe('Custom Validators phone,', () => {
  let control: FormControl;
  let validator: ValidatorFn;
  let error = {phone: true};

  describe('locale: hu-HU,', () => {

    beforeEach(() => {
      validator = CustomValidators.phone("hu-HU");
    });

    function phoneDataProvider() {
      return [
        {phone: '+36201231234', valid: true},
        {phone: '+36211231234', valid: true},
        {phone: '+36301231234', valid: true},
        {phone: '+36311231234', valid: true},
        {phone: '+36701231234', valid: true},
        {phone: '+36901231234', valid: true},
        {phone: '+3620123123', valid: false},
        {phone: '+3621123123', valid: false},
        {phone: '+3630123123', valid: false},
        {phone: '+3670123123', valid: false},
        {phone: '+36-20-123-1234', valid: true},
        {phone: '+36-1-123-1234', valid: true},
        {phone: '+36-1-123-123', valid: false},
        {phone: '+36-11-123-123', valid: false},
        {phone: '+36-21-123-123', valid: false},
        {phone: '+36-22-123-123', valid: true},
        {phone: '+3622123123', valid: true},
        {phone: '+36/22/123/123', valid: true},
        {phone: '+36/22/123-123', valid: true},
        {phone: '+36-32-123-123', valid: true},
        {phone: '+(36)-32-123-123', valid: true},
        {phone: '(36)-32-123-123', valid: true},
        {phone: '36-32-123-123', valid: true}
      ]
    }

    using(phoneDataProvider, (data) => {
      let testCase = data.phone + ' should be ' + (data.valid ? 'valid' : 'invalid');

      it(testCase, () => {
        control = new FormControl(data.phone);

        if (data.valid)
          return expect(validator(control)).toBeNull();

        expect(validator(control)).toEqual(error);
      })
    });

  });

  describe('locale: de-CH,', () => {

    beforeEach(() => {
      validator = CustomValidators.phone("de-CH");
    });

    function phoneDataProvider() {
      return [
        {phone: '+41791234567', valid: true},
        {phone: '+410791234567', valid: true},
        {phone: '+41(0)791234567', valid: true},
        {phone: '+41 79 123 45 67', valid: true},
        {phone: '+41 079 123 45 67', valid: true},
        {phone: '+41 (0)79 123 45 67', valid: true},
        {phone: '41791234567', valid: true},
        {phone: '410791234567', valid: true},
        {phone: '41(0)791234567', valid: true},
        {phone: '41 79 123 45 67', valid: true},
        {phone: '41 079 123 45 67', valid: true},
        {phone: '41 (0)79 123 45 67', valid: true},
        {phone: '0791234567', valid: true},
        {phone: '079 123 45 67', valid: true}
      ]
    }

    using(phoneDataProvider, (data) => {
      let testCase = data.phone + ' should be ' + (data.valid ? 'valid' : 'invalid');

      it(testCase, () => {
        control = new FormControl(data.phone);

        if (data.valid)
          return expect(validator(control)).toBeNull();

        expect(validator(control)).toEqual(error);
      })
    });

  });

  describe('locale: pt-BR,', () => {

    beforeEach(() => {
      validator = CustomValidators.phone("pt-BR");
    });

    function phoneDataProvider() {
      return [
        {phone: '+55 11 98765-4321', valid: true},
        {phone: '+55 (11) 98765-4321', valid: true},
        {phone: '+55-11-98765-4321', valid: true},
        {phone: '+55 11 98765 4321', valid: true},
        {phone: '+5511987654321', valid: true},
        {phone: '5511987654321', valid: true},
        {phone: '+55 11 88765-4321', valid: false},
        {phone: '+55 (11) 8765-4321', valid: false},
        {phone: '+55-11-98765-432', valid: false},
        {phone: '+55 1 98765 4321', valid: false},
        {phone: '+511987654321', valid: false},
        {phone: '55119876543212', valid: false},
        {phone: '+54 11 98765-4321', valid: false}
      ]
    }

    using(phoneDataProvider, (data) => {
      let testCase = data.phone + ' should be ' + (data.valid ? 'valid' : 'invalid');

      it(testCase, () => {
        control = new FormControl(data.phone);

        if (data.valid)
          return expect(validator(control)).toBeNull();

        expect(validator(control)).toEqual(error);
      })
    });

  });

  describe('locale: en-US,', () => {

    beforeEach(() => {
      validator = CustomValidators.phone("en-US");
    });

    function phoneDataProvider() {
      return [
        {phone: '888 555 2112', valid: true},
        {phone: '888 555 2112', valid: true},
        {phone: '(888) 555-2112', valid: true},
        {phone: '(888) 555 2112', valid: true},
        {phone: '888-555-2112', valid: true},
        {phone: '888-555 2112', valid: true},
        {phone: '8885552112', valid: true}
      ]
    }

    using(phoneDataProvider, (data) => {
      let testCase = data.phone + ' should be ' + (data.valid ? 'valid' : 'invalid');

      it(testCase, () => {
        control = new FormControl(data.phone);

        if (data.valid)
          return expect(validator(control)).toBeNull();

        expect(validator(control)).toEqual(error);
      })
    });

  });
});
