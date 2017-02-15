import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const RANGE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => RangeValidator),
  multi: true
};

@Directive({
  selector: '[range][formControlName],[range][formControl],[range][ngModel]',
  providers: [RANGE_VALIDATOR]
})
export class RangeValidator implements Validator, OnInit, OnChanges {
  @Input() range: [number];

  private validator: ValidatorFn;
  private _onChange: () => void;

  ngOnInit() {
    this.validator = CustomValidators.range(this.range);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      if (key === 'range') {
        this.validator = CustomValidators.range(changes[key].currentValue);
        if (this._onChange) this._onChange();
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }

  registerOnValidatorChange(fn: () => void): void {
    this._onChange = fn;
  }
}
