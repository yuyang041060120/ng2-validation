import { FormControl, ValidatorFn } from '@angular/forms';

import { url } from './validator';

describe('Url', () => {
  const VALIDATOR_ERROR = {url: true};
  let control: FormControl;
  let validator: ValidatorFn;

  beforeEach(() => {
    validator = url;
  });

  const validTestCases = [
    "http://test.com",
    "http://www.test.com",
    "https://www.test.com",
    "http://localhost",
    "http://localhost:4200",
    "http://192.168.0.1:8000",
    "http://172.0.0.1",
    "http://my.domain.com:9000/auth/sso/acs",
  ];

  const invalidTestCases = [
    "23a",
    "test.com",
    "1234://my.domain.com",
    "http://my.domain.com/text with space",
  ];


  validTestCases.forEach(validURL => {
    it(`"${validURL}" URL should equal to "null"`, async () => {
      control = new FormControl(validURL);
      expect(validator(control)).toBeNull();
    });
  });

  invalidTestCases.forEach(invalidURL => {
    it(`"${invalidURL}" should equal to "${VALIDATOR_ERROR}"`, async () => {
      control = new FormControl(invalidURL);
      expect(validator(control)).toEqual(VALIDATOR_ERROR);
    });
  })
});
