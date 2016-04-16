'use strict'
var random = require('node-random-number')

module.exports = function (array, count) {
  var indexes = random({start: 0, end: array.length, count: count})
  return indexes.map(function (index) {
    return array[index]
  })
}
