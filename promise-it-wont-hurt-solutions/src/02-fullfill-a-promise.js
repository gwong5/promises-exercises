const promise = new Promise((fulfill, reject) => {
  setTimeout(fulfill, 300, 'FULFILLED!')
})

promise.then(console.log)
