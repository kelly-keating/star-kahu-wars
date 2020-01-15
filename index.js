const server = require('./server')

const port = process.env.PORT || 3000


server.listen(port, function () {
  // eslint-disable-next-line no-console
  console.log('A long time ago, in a galaxy far far away...')
})
