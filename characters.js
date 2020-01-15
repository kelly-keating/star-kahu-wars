const express = require('express')
const router = express.Router()

const characterData = require('./characterData')


router.get('/', (req, res) => {
    res.render('characters/characterList', {characters: characterData})
})

// Route order of these two is important..
router.get('/add', (req, res) => {
    res.render('characters/addForm')
})

router.get('/:id', (req, res) => {
    let character = characterData.find(person => {
        return person.id == req.params.id
    })
    res.render('characters/characterProfile', character)
})

router.post('/add', (req, res) => {
    res.render('characters/greet', {name: req.body.name})
})

module.exports = router