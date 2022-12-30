const fsNoProtocol = require('fs')
const fsWithProtocol = require('node:fs')

test('node version to be at least 18', () => {
  expect(process.version).toMatch(new RegExp('^v18\.'))
})

test('require fs (without node: protocol)', () => {
  expect(fsNoProtocol.existsSync).toBeDefined()
})

test('require fs (with node: protocol)', () => {
  expect(fsWithProtocol.existsSync).toBeDefined()
})

test('expect global fetch', () => {
  expect(global.fetch).toBeDefined()
})