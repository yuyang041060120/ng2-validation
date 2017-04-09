import { FormControl, ValidatorFn } from '@angular/forms';
const using = require('jasmine-data-provider');

import { phone } from './';

describe('Phone', () => {
  let control: FormControl;
  let validator: ValidatorFn;
  let error = {phone: true};

  describe('locale: hu-HU,', () => {

    beforeEach(() => {
      validator = phone('hu-HU');
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
      validator = phone('de-CH');
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

  describe('locale: en-NG,', () => {

    beforeEach(() => {
      validator = phone('en-NG');
    });

    function phoneDataProvider() {
      return [
        {phone: '+2347028616266', valid: true},
        {phone: '+2347038616266', valid: true},
        {phone: '+2347048616266', valid: true},
        {phone: '+2348028616266', valid: true},
        {phone: '+2348038616266', valid: true},
        {phone: '+2348058616266', valid: true},
        {phone: '+2348068616266', valid: true},
        {phone: '+2348078616266', valid: true},
        {phone: '+2348088616266', valid: true},
        {phone: '+2348098616266', valid: true},
        {phone: '2347028616266', valid: true},
        {phone: '2347038616266', valid: true},
        {phone: '2347048616266', valid: true},
        {phone: '2348028616266', valid: true},
        {phone: '2348038616266', valid: true},
        {phone: '2348058616266', valid: true},
        {phone: '2348068616266', valid: true},
        {phone: '2348078616266', valid: true},
        {phone: '2348088616266', valid: true},
        {phone: '2348098616266', valid: true},
        {phone: '07028616266', valid: true},
        {phone: '07038616266', valid: true},
        {phone: '07048616266', valid: true},
        {phone: '08028616266', valid: true},
        {phone: '08038616266', valid: true},
        {phone: '08058616266', valid: true},
        {phone: '08068616266', valid: true},
        {phone: '08078616266', valid: true},
        {phone: '08088616266', valid: true},
        {phone: '08098616266', valid: true},
        {phone: '08128616266', valid: true},
        {phone: '08138616266', valid: true},
        {phone: '09038616266', valid: true},
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
      validator = phone('pt-BR');
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
      validator = phone('en-US');
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
