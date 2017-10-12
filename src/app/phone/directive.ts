import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { phone } from './validator';

const PHONE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => PhoneValidator),
  multi: true
};

@Directive({
  selector: '[phone][formControlName],[phone][formControl],[phone][ngModel]',
  providers: [PHONE_VALIDATOR]
})
export class PhoneValidator implements Validator, OnInit, OnChanges {
  @Input() phone: string;

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = phone(this.phone);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      if (key === 'phone') {
        this.validator = phone(changes[key].currentValue);
        if (this.onChange) this.onChange();
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this.onChange = fn;
  }
}
