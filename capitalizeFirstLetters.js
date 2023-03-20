function capitalizeFirstLetters(input) {
  return input.length > 0
    ? input
        .split(' ')
        .map(c => (c[0] = c[0].toUpperCase() + c.slice(1)))
        .join(' ')
    : ''
}

module.exports = capitalizeFirstLetters
