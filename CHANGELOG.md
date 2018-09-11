### [6.1.0]
- Merge pull request [#15](https://github.com/rsaenen/ngx-custom-validators/pull/15)
### [6.0.5]
- Fix issue [#11](https://github.com/rsaenen/ngx-custom-validators/issues/11)
### [6.0.4]
- Fix issue [#11](https://github.com/rsaenen/ngx-custom-validators/issues/11)
### [6.0.3]
- Modificiation of ArrayLength validator attribute (string -> number)
- Using ValidationErrors from @angular/forms to replace {[key: string]: any}
- Fix issue [#12](https://github.com/rsaenen/ngx-custom-validators/issues/12)
- Update dependencies
### [6.0.2]
- Fix issue with date/min-date/max-date validators with Moment.js and NgbDateStruct for months January and December
### [6.0.1]
- Date supports Moment.js
### [6.0.0]
- Angular 6 support
- Rename repository to ngx-custom-validators
### [5.1.0]
- Fix dependencies causing issues in some cases, dependencies should be devDependencies
- Remove `package-lock.json` see [angular-cli/angular-cli#7334](https://github.com/angular/angular-cli/issues/7334)
- Separated CHANGELOG created. 
- ISSUE_TEMPLATE created. 
### [5.0.3]
- Fix issue `ngModel` equals to null with `maxDate` and `minDate`.
### [5.0.2]
- fix for `max-date` and `min-date` validators
- ngModel type [ngbDateStruct](https://github.com/ng-bootstrap/ng-bootstrap/blob/master/src/datepicker/ngb-date-struct.ts) support for maxDate and minDate.
- Changelog initialization. 
### [5.0.1]
- **Breaking change** Directive `email` renamed to `ngvemail` see [rsaenen/ngx-custom-validators#5](https://github.com/rsaenen/ngx-custom-validators/issues/5)
- Remove deprecated animations use for dev 
### [5.0.0]
- Property validator with multiple properties check/Update dev dependencies (Angular 5)
