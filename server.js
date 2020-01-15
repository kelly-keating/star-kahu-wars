const express = require('express')
const hbs = require('express-handlebars')

const server = express()

const characterRouter = require('./characters')

// Data
const crawls = require('./crawls')

// Middleware
server.engine('hbs', hbs({
  defaultLayout: 'main',
  extname: 'hbs'
}))
server.set('view engine', 'hbs')
server.use(express.static('public'))
server.use(express.urlencoded({ extended: true }))

// Routes
server.use('/characters', characterRouter)

server.get('/', (req, res) => {
  res.render('home', {home: true})
})

server.get('/crawls', (req, res) => {
  res.render('crawlList', {episodes: crawls})
})

server.get('/crawls/:id', (req, res) => {
  let episode = crawls.find((episode) => {
    return episode.id == req.params.id
  })
  res.render('crawl', episode)
})

server.get('/links', (req, res) => {
  res.render('links')
})

module.exports = server
