# Description

Angular Custom Validators, forked from [ng2-validation](https://github.com/yuyang041060120/ng2-validation).
Directives for form validation (template or model driven).

# Installation

```bash
npm i ngx-custom-validators --save
```

# Validators

## Angular built-in validators

- maxlength
- minlength
- pattern
- required

## Custom validators

- array length
- base64
- credit card
- date
- date ISO
- digits
- email
- equal
- not equal
- equal to
- not equal to
- greater than
- greater than or equal
- json
- less than
- less than or equal
- max
- max date
- min
- min date
- not equal
- not equal to
- number
- property
- range
- range length
- url
- uuid

# Usage

The paramater of each validator (if it has) can be accessible in the template with `reason`.
```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [gt]="10">
<!-- Will display : error message and must be greater than 10 -->
<p *ngIf="field.errors?.gt">error message and must be greater than {{ field.errors?.reason }}</p>
``` 

## Template driven

import `FormsModule` and `CustomFormsModule` in *app.module.ts*

```typescript
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CustomFormsModule } from 'ngx-custom-validators';

import { AppComponent } from './app.component';

@NgModule({
    imports: [BrowserModule, FormsModule, CustomFormsModule],
    declarations: [AppComponent],
    bootstrap: [AppComponent]
})
export class AppModule {
}
```

### range length - rangeLength

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [rangeLength]="[5, 9]">
<p *ngIf="field.errors?.rangeLength">error message</p>
```

### min

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [min]="10">
<p *ngIf="field.errors?.min">error message</p>
```

### greater than - gt

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [gt]="10">
<p *ngIf="field.errors?.gt">error message</p>
```

### greater than or equal - gte

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [gte]="10">
<p *ngIf="field.errors?.gte">error message</p>
```

### max

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [max]="20">
<p *ngIf="field.errors?.max">error message</p>
```

### less than - lt

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [lt]="20">
<p *ngIf="field.errors?.lt">error message</p>
```

### less than or equal - lte

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [lte]="20">
<p *ngIf="field.errors?.lte">error message</p>
```

### range

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [range]="[10, 20]">
<p *ngIf="field.errors?.range">error message</p>
```

### digits

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" digits>
<p *ngIf="field.errors?.digits">error message</p>
```

### number

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" number>
<p *ngIf="field.errors?.number">error message</p>
```

### url

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" url>
<p *ngIf="field.errors?.url">error message</p>
```

### email

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" ngvemail>
<p *ngIf="field.errors?.email">error message</p>
```

### date

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" date>
<p *ngIf="field.errors?.date">error message</p>
```

### min date - minDate

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" minDate="2016-09-09">
<p *ngIf="field.errors?.minDate">error message</p>
```

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [minDate]="myOtherField">
<p *ngIf="field.errors?.minDate">error message</p>
```

### max date - maxDate

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" maxDate="2016-09-09">
<p *ngIf="field.errors?.maxDate">error message</p>
```

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [maxDate]="myOtherField">
<p *ngIf="field.errors?.maxDate">error message</p>
```

### date ISO - dateISO

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" dateISO>
<p *ngIf="field.errors?.dateISO">error message</p>
```

### credit card - creditCard

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" creditCard>
<p *ngIf="field.errors?.creditCard">error message</p>
```

### json

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" json>
<p *ngIf="field.errors?.json">error message</p>
```

### base64

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" base64>
<p *ngIf="field.errors?.base64">error message</p>
```

### uuid

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [uuid]="'all'">
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
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [equal]="'xxx'">
<p *ngIf="field.errors?.equal">error message</p>
```

### not equal - notEqual

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [notEqual]="'xxx'">
<p *ngIf="field.errors?.notEqual">error message</p>
```

### equal to - equalTo

```html
<input type="password" ngModel name="password" #password="ngModel" required>
<p *ngIf="password.errors?.required">required error</p>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [equalTo]="password">
<p *ngIf="certainPassword.errors?.equalTo">equalTo error</p>
```

### not equal to - notEqualTo

```html
<input type="text" ngModel name="password" #password="ngModel" required>
<p *ngIf="password.errors?.required">required error</p>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [notEqualTo]="password">
<p *ngIf="certainPassword.errors?.equalTo">equalTo error</p>
```

### property

```typescript
public obj = { id: 1 } // OK
public obj = { name: 'baguette' } // KO
```

```html
<input type="text" ngModel name="obj" #obj="ngModel" property="id">
<!-- For multiple properties check -->
<input type="text" ngModel name="obj" #obj="ngModel" property="id,value,name">
<p *ngIf="obj.errors?.property">property error</p>
```

### array length - ArrayLength
```typescript
public arr = [{ name: 'baguette' }, { name: 'croisant' }] // OK
public arr = [{ name: 'baguette' }] // KO
```

```html
<input type="text" ngModel name="arr" #arr="ngModel" arrayLength="2">
<p *ngIf="arr.errors?.arrayLength">arrayLength error</p>
```

## Model driven

import `ReactiveFormsModule` in *app.module.ts*

```typescript
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

```typescript
import { Component } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { CustomValidators } from 'ngx-custom-validators';

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
<input type="text" formControlName="field">
<p *ngIf="demoForm.from.controls.field.errors?.rangeLength">error message</p>
```

### range length - rangeLenght

```typescript
new FormControl('', CustomValidators.rangeLength([5, 9]))
```

### min

```typescript
new FormControl('', CustomValidators.min(10))
```

### greater than - gt

```typescript
new FormControl('', CustomValidators.gt(10))
```

### max

```typescript
new FormControl('', CustomValidators.max(20))
```

### less than - lt

```typescript
new FormControl('', CustomValidators.lt(20))
```

### range

```typescript
new FormControl('', CustomValidators.range([10, 20]))
```

### digits

```typescript
new FormControl('', CustomValidators.digits)
```

### number

```typescript
new FormControl('', CustomValidators.number)
```

### url

```typescript
new FormControl('', CustomValidators.url)
```

### email

```typescript
new FormControl('', CustomValidators.email)
```

### date

```typescript
new FormControl('', CustomValidators.date)
```

### min date - minDate

```typescript
new FormControl('', CustomValidators.minDate('2016-09-09'))
```

### max date - maxDate

```typescript
new FormControl('', CustomValidators.maxDate('2016-09-09'))
```

### date ISO - dateISO

```typescript
new FormControl('', CustomValidators.dateISO)
```

### credit card - creditCard

```typescript
new FormControl('', CustomValidators.creditCard)
```

### json

```typescript
new FormControl('', CustomValidators.json)
```

### base64

```typescript
new FormControl('', CustomValidators.base64)
```

### uuid

```typescript
new FormControl('', CustomValidators.uuid('3'))
```

### equal

```typescript
new FormControl('', CustomValidators.equal('xxx'))
```

### not equal - notEqual

```typescript
new FormControl('', CustomValidators.notEqual('xxx'))
```

### equal to - equalTo

```typescript
let password = new FormControl('', Validators.required);
let certainPassword = new FormControl('', CustomValidators.equalTo(password));

this.form = new FormGroup({
  password: password,
  certainPassword: certainPassword
});
```

```html
<form [formGroup]="form">
  <input type="password" formControlName="password">
  <p *ngIf="form.controls.password.errors?.required">required error</p>
  <input type="password" formControlName="certainPassword">
  <p *ngIf="form.controls.certainPassword.errors?.equalTo">equalTo error</p>
</form>
```

### not equal to - notEqualTo

```typescript
let password = new FormControl('', Validators.required);
let certainPassword = new FormControl('', CustomValidators.notEqualTo(password));

this.form = new FormGroup({
  password: password,
  certainPassword: certainPassword
});
```

```html
<form [formGroup]="form">
  <input type="password" formControlName="password">
  <p *ngIf="form.controls.password.errors?.required">required error</p>
  <input type="password" formControlName="certainPassword">
  <p *ngIf="form.controls.certainPassword.errors?.notEqualTo">notEqualTo error</p>
</form>
```

### property
```typescript
public obj = { id: 1 };

this.form = new FormGroup({
  obj: new FormControl('', CustomValidators.property('id'))
  // For multiple properties check
  obj: new FormControl('', CustomValidators.property('id,value,name'))
});
```

```html
<form [formGroup]="form">
  <input type="text" formControlName="obj">
  <p *ngIf="form.controls.obj.errors?.property">property error</p>
</form>
```

### array length - ArrayLength
```typescript
public arr = [{ name: 'baguette' }, { name: 'croisant' }]
this.form = new FormGroup({
  arr: new FormControl('', CustomValidators.arrayLength(2))
});
```

```html
<form [formGroup]="form">
  <input type="text" formControlName="arr">
  <p *ngIf="arr.errors?.arrayLength">arrayLength error</p>
</form>
```

# For developpers
To run the projet : `npm start`
Don't forget to run `npm test` and `npm lint` before each pull request. Thanks !
