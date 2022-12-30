# node-18-tests

- Various node-18 tests. 
- Tests that `node:` protocol imports are **not** required in node-18.
- Test that the global fetch is not the same as node-fetch (in case node-fetch just defaults to the global fetch). This is for compatibility reasons since node-fetch is not 100% compliant with the spec.
- Includes a linter rule to detect if you are using the `node:` protocol import.

## Pre-requisites

1. Use [nvm](https://github.com/nvm-sh/nvm) to auto-switch to node-18 when in this repo (via the `.nvmrc`)
2. npm install


## Usage

- Run `npm test`
- There should be one warning regarding the `require` that does not use a `node:` protocol import
- All tests should pass under node 18

## Eslint

Use the `.eslintrc.json` configuration in your own repos to detect whether you are using `node:` protocol imports.
