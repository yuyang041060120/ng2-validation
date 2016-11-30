import { Directive, Input, forwardRef, OnInit, OnChanges, SimpleChanges } from '@angular/core';
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
export class UUIDValidator implements Validator, OnInit, OnChanges {
  @Input() uuid;

  private validator: ValidatorFn;

  ngOnInit() {
    this.validator = CustomValidators.uuid(this.uuid);
  }

  ngOnChanges(changes: SimpleChanges) {
    for (let key in changes) {
      if (key === 'uuid') {
        this.validator = CustomValidators.uuid(changes[key].currentValue);
      }
    }
  }

  validate(c: AbstractControl): {[key: string]: any} {
    return this.validator(c);
  }
}
