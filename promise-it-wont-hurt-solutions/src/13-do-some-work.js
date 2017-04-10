const qhttp = require('q-io/http')

const getData = (id => 'localhost:7001/' + id)

qhttp.read('http://localhost:7000/')
  .then(id => qhttp.read('http://localhost:7001/' + id))
  .then(json => console.log(JSON.parse(json)))
  .then(null, console.error)
  .done()