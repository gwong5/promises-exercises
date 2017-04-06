const attachTitle = (value) => {
  return 'DR. ' + value
}

const getName = () => {
  return Promise.resolve('MANHATTAN')
}

getName().then(attachTitle).then(console.log)