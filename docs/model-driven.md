# Model-Driven

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

```typescript
const field = new FormControl('', CustomValidators.base64);
```

```html
<p *ngIf="field.hasError('base64')">error message</p>
```

### creditCard

```typescript
const field = new FormControl('', CustomValidators.creditCard);
```

```html
<p *ngIf="field.hasError('creditCard')">error message</p>
```

### date

```typescript
const field = new FormControl('', CustomValidators.date);
```

```html
<p *ngIf="field.hasError('date')">error message</p>
```

### dateISO

```typescript
const field = new FormControl('', CustomValidators.dateISO);
```

```html
<p *ngIf="field.hasError('dateISO')">error message</p>
```

### digits

```typescript
const field = new FormControl('', CustomValidators.digits);
```

```html
<p *ngIf="field.hasError('digits')">error message</p>
```

### email

```typescript
const field = new FormControl('', CustomValidators.email);
```

```html
<p *ngIf="field.hasError('email')">error message</p>
```

### equal

```typescript
const field = new FormControl('', CustomValidators.equal('xxx'));
```

```html
<p *ngIf="field.hasError('equal')">error message</p>
```

### equalTo

```typescript
const field = const password = new FormControl('', Validators.required);;
const field = const certainPassword = new FormControl('', CustomValidators.equalTo(password));;

this.group = new FormGroup({
  password: password,
  certainPassword: certainPassword
});
```

```html
<form [formGroup]="group">
  <input type="password" formControlName="password">
  <p *ngIf="group.get('password').hasError('required')">required error</p>
  <input type="password" formControlName="certainPassword">
  <p *ngIf="group.get('certainPassword').hasError('equalTo')">equalTo error</p>
</form>
```

### gt

```typescript
const field = new FormControl('', CustomValidators.gt(10));
```

```html
<p *ngIf="field.hasError('gt')">error message</p>
```

### gte

```typescript
const field = new FormControl('', CustomValidators.gte(10));
```

```html
<p *ngIf="field.hasError('gte')">error message</p>
```

### json

```typescript
const field = new FormControl('', CustomValidators.json);
```

```html
<p *ngIf="field.hasError('json')">error message</p>
```

### lt

```typescript
const field = new FormControl('', CustomValidators.lt(20));
```

```html
<p *ngIf="field.hasError('lt')">error message</p>
```

### lte

```typescript
const field = new FormControl('', CustomValidators.lte(20));
```

```html
<p *ngIf="field.hasError('lte')">error message</p>
```

### max

```typescript
const field = new FormControl('', CustomValidators.max(20));
```

```html
<p *ngIf="field.hasError('max')">error message</p>
```

### maxDate

```typescript
const field = new FormControl('', CustomValidators.maxDate('2016-09-09'));
```

```html
<p *ngIf="field.hasError('maxDate')">error message</p>
```

### min

```typescript
const field = new FormControl('', CustomValidators.min(10));
```

```html
<p *ngIf="field.hasError('min')">error message</p>
```

### minDate

```typescript
const field = new FormControl('', CustomValidators.minDate('2016-09-09'));
```

```html
<p *ngIf="field.hasError('minDate')">error message</p>
```

### notEqual

```typescript
const field = new FormControl('', CustomValidators.notEqual('xxx'));
```

```html
<p *ngIf="field.hasError('notEqual')">error message</p>
```

### notEqualTo

```typescript
const field = const password = new FormControl('', Validators.required);;
const field = const certainPassword = new FormControl('', CustomValidators.notEqualTo(password));;

this.group = new FormGroup({
  password: password,
  certainPassword: certainPassword
});
```

```html
<form [formGroup]="group">
  <input type="password" formControlName="password">
  <p *ngIf="group.get('password').hasError('required')">required error</p>
  <input type="password" formControlName="certainPassword">
  <p *ngIf="group.get('certainPassword').hasError('notEqualTo')">notEqualTo error</p>
</form>
```

### number

```typescript
const field = new FormControl('', CustomValidators.number);
```

```html
<p *ngIf="field.hasError('number')">error message</p>
```

### phone

```typescript
const field = new FormControl('', CustomValidators.phone('zh-CN'));
```

```html
<p *ngIf="field.hasError('phone')">error message</p>
```

### range

```typescript
const field = new FormControl('', CustomValidators.range([10, 20]));
```

```html
<div *ngIf="field.hasError('range')">
  <p>Actual value: {{field.getError('range').actualValue}}</p>
  <p>Required value: {{field.getError('range').requiredValue}}</p>
</div>
```

### rangeLength

```typescript
const field = new FormControl('', CustomValidators.rangeLength([5, 9]));
```

```html
<p *ngIf="field.hasError('rangeLength')">error message</p>
```

### url

```typescript
const field = new FormControl('', CustomValidators.url);
```

```html
<p *ngIf="field.hasError('url')">error message</p>
```

### uuid

```typescript
const field = new FormControl('', CustomValidators.uuid('3'));
```

```html
<p *ngIf="field.hasError('uuid')">error message</p>
```
