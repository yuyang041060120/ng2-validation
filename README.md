# Description

Angular2 custom validation, inspired by jQuery validation.

# Install

```bash
npm install ng2-validation --save
```

# Validators

## angular2 built-in validators

- required
- minlength
- maxlength
- pattern

## extend validators

- rangeLength
- min
- max
- range
- digits
- number
- url
- email
- date
- dateISO
- creditCard
- json
- base64
- phone
- uuid
- equal
- equalTo

> NOTE:creditCard, json, base64, phone and uuid come from [angular2 form validators](https://github.com/AngularClass/angular2-form-validators)

# Usage

First, you need use the latest form component, and disable deprecated forms.

```javascript
import { bootstrap }      from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import { AppComponent } from './src/app.component';

bootstrap(AppComponent, [
    disableDeprecatedForms(),
    provideForms(),
]).catch(err => console.error(err));
```



## template driven

First, import `CUSTOM_FORM_DIRECTIVES` and `REACTIVE_FORM_DIRECTIVES`, add them to component directives config.

```javascript
import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, } from '@angular/forms';
import { CUSTOM_FORM_DIRECTIVES } from 'ng2-validation';

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [REACTIVE_FORM_DIRECTIVES, CUSTOM_FORM_DIRECTIVES]
})
export class AppComponent implements OnInit {
    
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

### max

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [max]="20"/>
<p *ngIf="field.errors?.max">error message</p>
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
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [phone]="'zh-CN'"/>
<p *ngIf="field.errors?.phone">error message</p>
```

*default*: en-US

**support**

- zh-CN
- zh-TW
- en-ZA
- en-AU
- en-HK
- fr-FR
- pt-PT
- el-GR
- en-GB
- en-US
- en-ZM
- ru-RU
- nb-NO
- nn-NO
- vi-VN
- en-NZ

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

### equalTo

```html
<input type="password" ngModel name="password" #password="ngModel"/>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [equalTo]="password"/>
<p *ngIf="certainPassword?.errors?.equalTo">error message</p>
```

## model driven

used like angular2 build-in validators.

```javascript
import { Component } from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl } from '@angular/forms';
import { CUSTOM_FORM_DIRECTIVES, CustomValidators } from 'ng2-validation';

@Component({
    selector: 'app',
    template: require('./app.html'),
    directives: [REACTIVE_FORM_DIRECTIVES, CUSTOM_FORM_DIRECTIVES]
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
<input type="text" [formControl]="form.controls.field"/>
<p *ngIf="form.controls.field.errors?.rangeLength">error message</p>
```

### examples

```javascript
CustomValidators.rangeLength([5, 9])

CustomValidators.min(10)

CustomValidators.max(20)

CustomValidators.range([10, 20])

CustomValidators.digits

CustomValidators.number

CustomValidators.url

CustomValidators.email

CustomValidators.date

CustomValidators.dateISO

CustomValidators.creditCard

CustomValidators.json

CustomValidators.base64

CustomValidators.phonoe('zh-CN')

CustomValidators.uuid('3')

CustomValidators.equal('xxx')

CustomValidators.equalTo(formControl)
```

# License

MIT