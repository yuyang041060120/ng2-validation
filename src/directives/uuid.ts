import { Directive, Input, forwardRef, OnInit } from '@angular/core';
import { NG_VALIDATORS, Validator, ValidatorFn, AbstractControl } from '@angular/forms';

import { CustomValidators } from '../index';

const UUID_VALIDATOR: any = {
  provide: NG_VALIDATORS,
  useExisting: forwardRef(() => UUIDValidator),
  multi: true
};

@Directive({
  selector: '[uuid][formControlName],[uuid][formControl],[uuid][ngModel]',
  providers: [UUID_VALIDATOR]
})
export class UUIDValidator implements Validator, OnInit {
  @Input() uuid;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = CustomValidators.uuid(this.uuid);
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
