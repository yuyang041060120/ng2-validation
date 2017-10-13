import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { minDate } from './validator';

const MIN_DATE_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MinDateValidator),
  multi: true
};

@Directive({
  selector: '[minDate][formControlName],[minDate][formControl],[minDate][ngModel]',
  providers: [MIN_DATE_VALIDATOR]
})
export class MinDateValidator implements Validator, OnInit, OnChanges {
  @Input() minDate;

  private validator: ValidatorFn;
  private onChange: () => void;

  ngOnInit() {
    this.validator = minDate(this.minDate);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (const key in changes) {
      if (key === 'minDate') {
        this.validator = minDate(changes[key].currentValue);
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
