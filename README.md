# ng2-validation
> Custom validators for Angular (inspired by jQuery validation).

[![NPM Version](https://img.shields.io/npm/v/yuyang041060120/ng2-validation.svg)](https://npmjs.org/package/ng2-validation)
[![Build Status](https://travis-ci.org/yuyang041060120/ng2-validation.svg?branch=master)](https://travis-ci.org/yuyang041060120/ng2-validation)
[![Downloads](https://img.shields.io/npm/dt/ng2-validation.svg)](https://npmjs.org/package/ng2-validation)
[![Downloads](https://img.shields.io/npm/dm/ng2-validation.svg)](https://npmjs.org/package/ng2-validation)

## Table of contents

  * [Installation](#installation)
  * [Getting started](#getting-started)
    + [Model-Driven](#model-driven)
    + [Template-Driven](#template-driven)
  * [Examples (Model-Driven)](#model-driven)
    + [base64](docs/model-driven.md#base64)
    + [creditCard](docs/model-driven.md#creditcard)
    + [date](docs/model-driven.md#date)
    + [dateISO](docs/model-driven.md#dateiso)
    + [digits](docs/model-driven.md#digits)
    + [email](docs/model-driven.md#email)
    + [equal](docs/model-driven.md#equal)
    + [equalTo](docs/model-driven.md#equalto)
    + [gt](docs/model-driven.md#gt)
    + [gte](docs/model-driven.md#gte)
    + [json](docs/model-driven.md#json)
    + [lt](docs/model-driven.md#lt)
    + [lte](docs/model-driven.md#lte)
    + [max](docs/model-driven.md#max)
    + [maxDate](docs/model-driven.md#maxdate)
    + [min](docs/model-driven.md#min)
    + [minDate](docs/model-driven.md#mindate)
    + [notEqual](docs/model-driven.md#notequal)
    + [notEqualTo](docs/model-driven.md#notequalto)
    + [number](docs/model-driven.md#number)
    + [phone](docs/model-driven.md#phone)
    + [range](docs/model-driven.md#range)
    + [rangeLength](docs/model-driven.md#rangelength)
    + [url](docs/model-driven.md#url)
    + [uuid](docs/model-driven.md#uuid)
  * [Examples (Template-Driven)](#template-driven)
    + [base64](docs/template-driven.md#base64)
    + [creditCard](docs/template-driven.md#creditcard)
    + [date](docs/template-driven.md#date)
    + [dateISO](docs/template-driven.md#dateiso)
    + [digits](docs/template-driven.md#digits)
    + [email](docs/template-driven.md#email)
    + [equal](docs/template-driven.md#equal)
    + [equalTo](docs/template-driven.md#equalto)
    + [gt](docs/template-driven.md#gt)
    + [gte](docs/template-driven.md#gte)
    + [json](docs/template-driven.md#json)
    + [lt](docs/template-driven.md#lt)
    + [lte](docs/template-driven.md#lte)
    + [max](docs/template-driven.md#max)
    + [maxDate](docs/template-driven.md#maxdate)
    + [min](docs/template-driven.md#min)
    + [minDate](docs/template-driven.md#mindate)
    + [notEqual](docs/template-driven.md#notequal)
    + [notEqualTo](docs/template-driven.md#notequalto)
    + [number](docs/template-driven.md#number)
    + [phone](docs/template-driven.md#phone)
    + [range](docs/template-driven.md#range)
    + [rangeLength](docs/template-driven.md#rangelength)
    + [url](docs/template-driven.md#url)
    + [uuid](docs/template-driven.md#uuid)
  * [Contributing](#contributing)

## Installation

The latest release of ng2-validation can be installed from npm

```
npm i ng2-validation -S
```

### SystemJS

```
'ng2-validation': 'npm:ng2-validation/bundles/ng2-validation.umd.js'
```

## Getting started

### Model-Driven

Import `ReactiveFormsModule` in your *main* module:

```typescript
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  // ...
  imports: [
    // ...
    ReactiveFormsModule
  ]
})
export class MainModule { }
```


Import `CustomValidators` in your component:

```typescript

import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

import { CustomValidators } from 'ng2-validation';

@Component({
  // ...
})
export class AnyComponent implements OnInit {

  form: FormGroup;

  constructor(private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.form = this.formBuilder.group({
      field: ['', CustomValidators.range([5, 9])]
    });
  }
}
```

### Template-Driven

Import `FormsModule` and `CustomFormsModule` in your *main* module:

```typescript
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  // ...
  imports: [
    // ...
    CustomFormsModule,
    FormsModule
  ]
})
export class MainModule { }
```

You can find examples in the [docs](docs) folder.

## Contributing

Read the [contributing guidelines](CONTRIBUTING.md)

# License

[MIT](LICENSE)
