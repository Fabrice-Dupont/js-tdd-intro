const assert = require('assert')

function capitalizeFirstLetters(input) {
  return input.length > 0
    ? input
        .split(' ')
        .map(c => (c[0] = c[0].toUpperCase() + c.slice(1)))
        .join(' ')
    : ''
}

// Check that capitalizeFirst is a function

assert.strictEqual(typeof capitalizeFirstLetters, 'function')

// Check that capitalizeFirst accepts one argument

assert.strictEqual(capitalizeFirstLetters.length, 1)

// Check that capitalizeFirst transforms javaScript correctly

assert.strictEqual(capitalizeFirstLetters('javaScript'), 'JavaScript')

// Check that capitalizeFirst transforms "i am learning TDD" correctly

assert.strictEqual(
  capitalizeFirstLetters('i am learning TDD'),
  'I Am Learning TDD'
)

// Check that it works for a 1-character string

assert.strictEqual(capitalizeFirstLetters('z'), 'Z')

// Check that it works for an empty string

assert.strictEqual(capitalizeFirstLetters(''), '')
