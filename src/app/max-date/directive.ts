import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { maxDate } from './validator';

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
  private onChange: () => void;

  ngOnInit() {
    this.validator = maxDate(this.maxDate);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'maxDate') {
        this.validator = maxDate(changes[key].currentValue);
        if (this.onChange) {
          this.onChange();
        }
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
