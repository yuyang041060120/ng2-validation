# Template-Driven

* [base64](#base64)
* [creditCard](#creditcard)
* [date](#date)
* [dateISO](#dateiso)
* [digits](#digits)
* [email](#email)
* [equal](#equal)
* [equalTo](#equalto)
* [gt](#gt)
* [gte](#gte)
* [json](#json)
* [lt](#lt)
* [lte](#lte)
* [max](#max)
* [maxDate](#maxdate)
* [min](#min)
* [minDate](#mindate)
* [notEqual](#notequal)
* [notEqualTo](#notequalto)
* [number](#number)
* [phone](#phone)
* [range](#range)
* [rangeLength](#rangelength)
* [url](#url)
* [uuid](#uuid)

### base64

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" base64>
<p *ngIf="field.hasError('base64')">error message</p>
```

### creditCard

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" creditCard>
<p *ngIf="field.hasError('creditCard')">error message</p>
```

### date

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" date>
<p *ngIf="field.hasError('date')">error message</p>
```

### dateISO

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" dateISO>
<p *ngIf="field.hasError('dateISO')">error message</p>
```

### digits

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" digits>
<p *ngIf="field.hasError('digits')">error message</p>
```

### email

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" email>
<p *ngIf="field.hasError('email')">error message</p>
```

### equal

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [equal]="'xxx'">
<p *ngIf="field.hasError('equal')">error message</p>
```

### equalTo

```html
<input type="password" ngModel name="password" #password="ngModel" required>
<p *ngIf="password.hasError('required')">required error</p>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [equalTo]="password">
<p *ngIf="certainPassword.hasError('equalTo')">equalTo error</p>
```

### gt

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [gt]="10">
<p *ngIf="field.hasError('gt')">error message</p>
```

### gte

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [gte]="10">
<p *ngIf="field.hasError('gte')">error message</p>
```

### json

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" json>
<p *ngIf="field.hasError('json')">error message</p>
```

### lt

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [lt]="20">
<p *ngIf="field.hasError('lt')">error message</p>
```

### lte

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [lte]="20">
<p *ngIf="field.hasError('lte')">error message</p>
```

### max

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [max]="20">
<p *ngIf="field.hasError('max')">error message</p>
```

### maxDate

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" maxDate="2016-09-09">
<p *ngIf="field.hasError('maxDate')">error message</p>
```

### min

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [min]="10">
<p *ngIf="field.hasError('min')">error message</p>
```

### minDate

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" minDate="2016-09-09">
<p *ngIf="field.hasError('minDate')">error message</p>
```

### notEqual

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [notEqual]="'xxx'">
<p *ngIf="field.hasError('notEqual')">error message</p>
```

### notEqualTo

```html
<input type="text" ngModel name="password" #password="ngModel" required>
<p *ngIf="password.hasError('required')">required error</p>
<input type="password" ngModel name="certainPassword" #certainPassword="ngModel" [notEqualTo]="password">
<p *ngIf="certainPassword.hasError('equalTo')">equalTo error</p>
```

### number

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" number>
<p *ngIf="field.hasError('number')">error message</p>
```

### phone

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" phone="CN">
<p *ngIf="field.hasError('phone')">error message</p>
```

For more details, check [libphonenumber](https://github.com/halt-hammerzeit/libphonenumber-js)

### range

```html
<input type="number" [(ngModel)]="model.field" name="field" #field="ngModel" [range]="[10, 20]">
<div *ngIf="field.hasError('range')">
  <p>Actual value: {{field.getError('range').actualValue}}</p>
  <p>Required value: {{field.getError('range').requiredValue}}</p>
</div>
```

### rangeLength

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [rangeLength]="[5, 9]">
<p *ngIf="field.hasError('rangeLength')">error message</p>
```

### url

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" url>
<p *ngIf="field.hasError('url')">error message</p>
```

### uuid

```html
<input type="text" [(ngModel)]="model.field" name="field" #field="ngModel" [uuid]="'all'">
<p *ngIf="field.hasError('uuid')">error message</p>
```

*default*: all

**support**

- 3
- 4
- 5
- all
