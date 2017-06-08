# Contributing Guide

This document shows you how to contribute to the project.

## Dependencies

Make sure you have the following dependencies on your machine:

* `Node.js`
* `npm`
* `Git`

## Installation

After fork and clone the repository, navigate to the project folder and install the dependencies

```sh
$ npm i
```

Create a new branch based on `master` and name it with the new feature / fix you want to do.

```sh
$ git checkout -b BRANCH_NAME
```

Note: *Use one branch per fix / feature*

## Testing

The tests are run with `jasmine` and `karma`.

```sh
$ npm test
```

## Submitting changes
* Make your changes
    + Make sure you have correctly exported the validator
    + Make sure to provide unit tests
    + Make sure you provided documentation for your validator (also add links to `README.md`).
    + Run your tests with `npm test`
* Commit (explicit message)
* Push to the forked repository
* Make a pull request
