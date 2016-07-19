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

- rangelength
- min
- max
- range
- digits
- number
- url
- email
- date
- dateiso

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

### rangelength

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" rangelength="[5, 9]"/>
<p *ngIf="field.errors?.rangelength">error message</p>
```

### min

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" min="10"/>
<p *ngIf="field.errors?.min">error message</p>
```

### max

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" max="20"/>
<p *ngIf="field.errors?.max">error message</p>
```

### range

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" range="[10, 20]"/>
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

### dateiso

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" dateiso/>
<p *ngIf="field.errors?.dateiso">error message</p>
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
<p *ngIf="form.controls.field.errors?.rangelength">error message</p>
```

### rangelength

```javascript
CustomValidators.rangeLength([5, 9])
```

### min

```javascript
CustomValidators.min(10)
```

### max

```javascript
CustomValidators.max(20)
```

### range

```javascript
CustomValidators.range([10, 20])
```

### digits

```javascript
CustomValidators.digits
```

### number

```javascript
CustomValidators.number
```

### url

```javascript
CustomValidators.url
```

### email

```javascript
CustomValidators.email
```

### date

```javascript
CustomValidators.date
```

### dateiso

```javascript
CustomValidators.dateiso
```

# License

MIT