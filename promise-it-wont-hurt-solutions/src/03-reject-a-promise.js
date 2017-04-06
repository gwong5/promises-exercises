const promise = new Promise((fulfill, reject) => {
  return setTimeout(reject, 300, new Error('REJECTED!'));
})

promise.then(null, (err) => console.log(err.message))