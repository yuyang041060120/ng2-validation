import { FormControl } from '@angular/forms';

import { notEqualTo } from './validator';

describe('NotEqualTo', () => {
  let notEqualControl: FormControl;
  let control: FormControl;
  const error = {notEqualTo: true};

  beforeEach(() => {
    notEqualControl = new FormControl();
    control = new FormControl();
  });

  it('all control is empty should valid', () => {
    expect(notEqualTo(notEqualControl)(control)).toEqual(error);
  });

  it('control.value = "xxx" and notEqualControl.value is empty should valid', () => {
    control.setValue('xxx');
    expect(notEqualTo(notEqualControl)(control)).toBeNull();
  });

  it('control.value = "xxx" and notEqualControl.value = "yyy" should valid', () => {
    control.setValue('xxx');
    notEqualControl.setValue('yyy');
    expect(notEqualTo(notEqualControl)(control)).toBeNull();
  });

  it('control.value = "xxx" and notEqualControl.value = "xxx" should equal to "{notEqualTo: true}"', () => {
    control.setValue('xxx');
    notEqualControl.setValue('xxx');
    expect(notEqualTo(notEqualControl)(control)).toEqual(error);
  });

  it('control.value is empty and notEqualControl.value = "yyy" should valid', () => {
    control.setValue('');
    notEqualControl.setValue('yyy');
    expect(notEqualTo(notEqualControl)(control)).toBeNull();
  });

});
