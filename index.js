Array.prototype.mapAsync = function * (cb) {
  let counter = 0
  
  for (const iterator of this) {
    yield cb(iterator, counter)
    counter++
  } 
}