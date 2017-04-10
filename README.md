# Description

Angular2 custom validation, inspired by jQuery validation.

# Install

```bash
npm install ng2-validation --save
```
# Systemjs

```bash
'ng2-validation': 'npm:ng2-validation/bundles/ng2-validation.umd.js'
```

# Validators

## angular2 built-in validators

- required
- minlength
- maxlength
- pattern

## custom validators

- rangeLength
- min
- gt
- gte
- max
- lt
- lte
- range
- digits
- number
- url
- email
- date
- minDate
- maxDate
- dateISO
- creditCard
- json
- base64
- phone
- uuid
- equal
- notEqual
- equalTo
- notEqualTo

# Usage

## template driven

import `FormsModule` and `CustomFormsModule` in *app.module.ts*

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ng2-validation'

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, CustomFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

### rangeLength

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [rangeLength]="[5, 9]"/>
<p *ngIf="field.errors?.rangeLength">error message</p>
```

### min

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [min]="10"/>
<p *ngIf="field.errors?.min">error message</p>
```

### gt

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [gt]="10"/>
<p *ngIf="field.errors?.gt">error message</p>
```

### gte

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [gte]="10"/>
<p *ngIf="field.errors?.gte">error message</p>
```

### max

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [max]="20"/>
<p *ngIf="field.errors?.max">error message</p>
```

### lt

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [lt]="20"/>
<p *ngIf="field.errors?.lt">error message</p>
```

### lte

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [lte]="20"/>
<p *ngIf="field.errors?.lte">error message</p>
```

### range

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [range]="[10, 20]"/>
<p *ngIf="field.errors?.range">error message</p>
```

### digits

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" digits/>
<p *ngIf="field.errors?.digits">error message</p>
```

### number

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" number/>
<p *ngIf="field.errors?.number">error message</p>
```

### url

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" url/>
<p *ngIf="field.errors?.url">error message</p>
```

### email

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" email/>
<p *ngIf="field.errors?.email">error message</p>
```

### date

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" date/>
<p *ngIf="field.errors?.date">error message</p>
```

### minDate

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" minDate="2016-09-09"/>
<p *ngIf="field.errors?.minDate">error message</p>
```

### maxDate

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" maxDate="2016-09-09"/>
<p *ngIf="field.errors?.maxDate">error message</p>
```

### dateISO

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" dateISO/>
<p *ngIf="field.errors?.dateISO">error message</p>
```

### creditCard

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" creditCard/>
<p *ngIf="field.errors?.creditCard">error message</p>
```

### json

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" json/>
<p *ngIf="field.errors?.json">error message</p>
```

### base64

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" base64/>
<p *ngIf="field.errors?.base64">error message</p>
```

### phone

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" phone="CN"/>
<p *ngIf="field.errors?.phone">error message</p>
```

details see [libphonenumber](https://github.com/halt-hammerzeit/libphonenumber-js)

### uuid

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [uuid]="'all'"/>
<p *ngIf="field.errors?.uuid">error message</p>
```

*default*: all

**support**

- 3
- 4
- 5
- all

### equal

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [equal]="'xxx'"/>
<p *ngIf="field.errors?.equal">error message</p>
```

### equal

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [notEqual]="'xxx'"/>
<p *ngIf="field.errors?.notEqual">error message</p>
```

### equalTo

```html
<input type="password" ngModel name="password" #password="ngModel" required/>
<p *ngIf="password.errors?.required">required error</p>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [equalTo]="password"/>
<p *ngIf="certainPassword.errors?.equalTo">equalTo error</p>
```

### notEqualTo

```html
<input type="text" ngModel name="password" #password="ngModel" required/>
<p *ngIf="password.errors?.required">required error</p>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [notEqualTo]="password"/>
<p *ngIf="certainPassword.errors?.equalTo">equalTo error</p>
```

## model driven

import `ReactiveFormsModule` in *app.module.ts*

```javascript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, ReactiveFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

import `CustomValidators` in *app.component.ts*

```javascript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ng2-validation';

@Component({
    selector: 'app',
    template: require('./app.html')
})
export class AppComponent {
    form: FormGroup;

    constructor() {
        this.form = new FormGroup({
            field: new FormControl('', CustomValidators.range([5, 9]))
        });
    }
}
```

```html
<input type="text" formControlName="field"/>
<p *ngIf="demoForm.from.controls.field.errors?.rangeLength">error message</p>
```

### rangeLength

```javascript
new FormControl('', CustomValidators.rangeLength([5, 9]))
```

### min

```javascript
new FormControl('', CustomValidators.min(10))
```

### gt

```javascript
new FormControl('', CustomValidators.gt(10))
```

### max

```javascript
new FormControl('', CustomValidators.max(20))
```

### lt

```javascript
new FormControl('', CustomValidators.lt(20))
```

### range

```javascript
new FormControl('', CustomValidators.range([10, 20]))
```

### digits

```javascript
new FormControl('', CustomValidators.digits)
```

### number

```javascript
new FormControl('', CustomValidators.number)
```

### url

```javascript
new FormControl('', CustomValidators.url)
```

### email

```javascript
new FormControl('', CustomValidators.email)
```

### date

```javascript
new FormControl('', CustomValidators.date)
```

### minDate

```javascript
new FormControl('', CustomValidators.minDate('2016-09-09'))
```

### maxDate

```javascript
new FormControl('', CustomValidators.maxDate('2016-09-09'))
```

### dateISO

```javascript
new FormControl('', CustomValidators.dateISO)
```

### creditCard

```javascript
new FormControl('', CustomValidators.creditCard)
```

### json

```javascript
new FormControl('', CustomValidators.json)
```

### base64

```javascript
new FormControl('', CustomValidators.base64)
```

### phone

```javascript
new FormControl('', CustomValidators.phone('zh-CN'))
```

### uuid

```javascript
new FormControl('', CustomValidators.uuid('3'))
```

### equal

```javascript
new FormControl('', CustomValidators.equal('xxx'))
```

### notEqual

```javascript
new FormControl('', CustomValidators.notEqual('xxx'))
```

### equalTo

```javascript
let password = new FormControl('', Validators.required);
let certainPassword = new FormControl('', CustomValidators.equalTo(password));

this.form = new FormGroup({
  password: password,
  certainPassword: certainPassword
});
```

```html
<form [formGroup]="form">
  <input type="password" formControlName="password"/>
  <p *ngIf="form.controls.password.errors?.required">required error</p>
  <input type="password" formControlName="certainPassword"/>
  <p *ngIf="form.controls.certainPassword.errors?.equalTo">equalTo error</p>
</form>
```

### notEqualTo

```javascript
let password = new FormControl('', Validators.required);
let certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

this.form = new FormGroup({
  password: password,
  certainPassword: certainPassword
});
```

```html
<form [formGroup]="form">
  <input type="password" formControlName="password"/>
  <p *ngIf="form.controls.password.errors?.required">required error</p>
  <input type="password" formControlName="certainPassword"/>
  <p *ngIf="form.controls.certainPassword.errors?.notEqualTo">notEqualTo error</p>
</form>
```

# License

MIT
