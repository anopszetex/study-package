Array.prototype.mapAsync = function * (cb) {
  let counter = 0
  
  for (const iterator of this) {
    yield cb(iterator, counter)
    counter++
  } 
}

const list = [1, 2, 3, 4, 5].mapAsync((row) => row * 2)
