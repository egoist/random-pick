import test from 'ava'
import pick from './'

const fruits = [
  'apple',
  'banana',
  'peach',
  'mango'
]

test('main', t => {
  t.is(pick(fruits).length, 1)
})

test('count', t => {
  t.is(pick(fruits, 3).length, 3)
})

test('no enough source to pick', t => {
  t.throws(() => {
    pick([1, 2, 3], 6)
  }, Error, 'You cannot get more than 3 numbers')
})
