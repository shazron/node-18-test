# node-18-test

Various node-18 tests. Tests that `node:` protocol imports are *not* required in node-18. Includes a linter rule to detect if you are using the import.

## Pre-requisites

1. Use [nvm])(https://github.com/nvm-sh/nvm) to auto-switch to node-18 when in this repo.
2. npm install


## Usage

Run `npm test`. There should be one warning regarding the `require` that does not use a `node:` protocol import.

## Eslint

Use the `.eslintrc.json` configuration in your own repos to detect whether you are using `node:` protocol imports.
