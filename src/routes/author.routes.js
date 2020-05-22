const { Router } = require('express');
const router = Router();
const _ = require('lodash');
const bookService = require('./book.routes.js')

const authors = require('../static-db/authors.json');
const books = require('../static-db/books.json');

// Get all authors
router.get('/authors', (req, res) => {
    res.status(200).json(authors);
})

// Get one author with specified id
router.get('/authors/:authorid', (req, res) => {
    const id = req.params.authorid;
    let count = 0;
    let author = [];

    _.each(authors, (a) => {
        if (a.id === id) {
            count ++;
            author.push(a);
        }
    });

    res.status(200).json(author);
})


// Add a author
router.post('/authors', (req, res) => {
    const {id, name, last_name} = req.body;
    if(id && name && last_name){
        const newAuthor = {...req.body };
        authors.push(newAuthor);
        res.status(201).json({'added': 'ok'});
    } else {
        res.status(400).json({'statusCode': 'Bad request'});
    }
});

// Remove a author
router.delete('/authors/:id', (req, res) => {
    const id = req.params.id;
    
    _.remove(authors, (author) => {
        return author.id === id;
    });

    _.remove(books, (book) => {
        return book.id === id;
    });

    res.status(200).json(authors);
});

// Modify a author
router.put('/authors/:id', (req, res) => {
    const id = req.params.id;
    const {name , last_name} = req.body;
    _.each(authors, (author) => {
        if (author.id === id) {
            author.name = name;
            author.last_name = last_name;
        }
    });
    res.status(200).json({'modified':'ok'});
})

module.exports = router;