import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const MAX_DATE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxDateValidator),
  multi: true
};

@Directive({
  selector: '[maxDate][formControlName],[maxDate][formControl],[maxDate][ngModel]',
  providers: [MAX_DATE_VALIDATOR]
})
export class MaxDateValidator implements Validator, OnInit, OnChanges {
  @Input() maxDate;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = CustomValidators.maxDate(this.maxDate);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      if (key === 'maxDate') {
        this.validator = CustomValidators.maxDate(changes[key].currentValue);
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
