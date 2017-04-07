const all = (promiseOne, promiseTwo) => {
  return new Promise((resolve) => {
    let counter = 0
    let output = []

    promiseOne.then((value) => {
      output[0] = value
      counter++

      if (counter >= 2) {
        resolve(output)
      }
    })

    promiseTwo.then((value) => {
      output[1] = value
      counter++

      if (counter >= 2) {
        resolve(output)
      }
    })
  })
}

all(getPromise1(), getPromise2()).then(console.log)