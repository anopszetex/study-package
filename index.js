const curry = (fn) => {
  const expectedArgs = fn.length;
  
  const curried = (...args) => {
    if(expectedArgs !== args.length) {
      return curried.bind(null, ...args)
    }

    return fn(...args) 
  }
  
  return curried
}

const myMap = function * (items, cb) {
  let counter = 0
  
  for (const iterator of items) {
    yield cb(iterator, counter, items)
    counter++
  } 
}

const mapAsync = curry(myMap)

export { mapAsync }