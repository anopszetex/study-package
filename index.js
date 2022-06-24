Array.prototype.mapAsync = function * (cb) {
  let counter = 0
  
  for (const iterator of this) {
    yield cb(iterator, counter)
    counter++
  } 
}

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

