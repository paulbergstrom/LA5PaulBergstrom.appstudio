
let quoteString = ('Failure is imply the opportunity to begin again this time more intelligently.')
let authorString = ('-Henry Ford')
let completeString = quoteString.concat(authorString)
let found = completeString.includes('Henry')

console.log(`The upper case string is ${quoteString.toUpperCase()}`)
console.log(`Concatenated string is ${completeString}`)

if (found == true) {
console.log('Henry was in completeString.')
} else {
  console.log('Henry was not in completeString.')
  }
