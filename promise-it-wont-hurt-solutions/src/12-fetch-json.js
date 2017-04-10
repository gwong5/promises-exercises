const qhttp = require('q-io/http')

qhttp.read('http://localhost:1337')
  .then(json => {
    console.log(JSON.parse(json))
  })
  .then(null, console.error)
  .done()