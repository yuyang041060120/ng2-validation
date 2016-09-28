import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const RANGE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RangeValidator),
  multi: true
};

@Directive({
  selector: '[range][formControlName],[range][formControl],[range][ngModel]',
  providers: [RANGE_VALIDATOR]
})
export class RangeValidator implements Validator, OnInit {
  @Input() range: [number];

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = CustomValidators.range(this.range);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
