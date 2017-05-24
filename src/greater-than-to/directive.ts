import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, FormControl, ValidatorFn, AbstractControl } from '@angular/forms';

import { gtTo } from './';

const GREATER_THAN_TO_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => GreaterThanToValidator),
  multi: true
};

@Directive({
  selector: '[gtTo][formControlName],[gtTo][formControl],[gtTo][ngModel]',
  providers: [GREATER_THAN_TO_VALIDATOR]
})
export class GreaterThanToValidator implements Validator, OnInit {
  @Input() gtTo: FormControl;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = gtTo(this.gtTo);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
