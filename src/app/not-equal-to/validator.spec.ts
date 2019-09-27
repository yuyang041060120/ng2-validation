import { FormControl } from '@angular/forms';

import { notEqualTo } from './validator';

describe('NotEqualTo', () => {
  let notEqualControl: FormControl;
  let control: FormControl;

  beforeEach(() => {
    notEqualControl = new FormControl();
    control = new FormControl();
  });

  it('all control is empty should valid', () => {
    console.log(notEqualTo(notEqualControl)(control));
    expect(notEqualTo(notEqualControl)(control)).toEqual(null);
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
    expect(notEqualTo(notEqualControl)(control)).toEqual({ notEqualTo: { control: notEqualControl, value: notEqualControl.value } });
  });

  it('control.value is empty and notEqualControl.value = "yyy" should valid', () => {
    control.setValue('');
    notEqualControl.setValue('yyy');
    expect(notEqualTo(notEqualControl)(control)).toBeNull();
  });

});
