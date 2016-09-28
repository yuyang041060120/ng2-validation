import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../';

const MAX_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => MaxValidator),
  multi: true
};

@Directive({
  selector: '[max][formControlName],[max][formControl],[max][ngModel]',
  providers: [MAX_VALIDATOR]
})
export class MaxValidator implements Validator, OnInit {
  @Input() max: number;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = CustomValidators.max(this.max);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
