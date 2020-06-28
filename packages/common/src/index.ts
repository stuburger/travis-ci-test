export { add } from './add'
export { sub } from './sub'

export const multiply = (a: number, b: number) => {
  console.log('multiplying...')
  console.log('a * b', a * b)
  console.log('blah')
  return a * b
}
export const divide = (a: number, b: number) => {
  console.log(a / b, 'a / b')
  return a / b
}
