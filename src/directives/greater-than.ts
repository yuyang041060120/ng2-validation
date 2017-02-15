import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const GREATER_THAN_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => GreaterThanValidator),
  multi: true
};

@Directive({
  selector: '[gt][formControlName],[gt][formControl],[gt][ngModel]',
  providers: [GREATER_THAN_VALIDATOR]
})
export class GreaterThanValidator implements Validator, OnInit, OnChanges {
  @Input() gt: number;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = CustomValidators.gt(this.gt);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      if (key === 'gt') {
        this.validator = CustomValidators.gt(changes[key].currentValue);
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
