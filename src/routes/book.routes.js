const { Router } = require('express');
const router = Router();
const _ = require('lodash');

const books = require('../books.json');


router.get('/books', (req, res) => {
    res.json(books);
})

router.post('/books', (req, res) => {
    const {name, isbn, author_id} = req.body;
    if(name && isbn && author_id){
        const newBook = {...req.body };
        books.push(newBook);
        res.json({'added': 'ok'});
    } else {
        res.status(400).json({'statusCode': 'Bad request'});
    }
});

router.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    _.remove(books, (book) => {
        return book.id === id;
    });
    res.json(books);
});

router.put('/books/:id', (req, res) => {
    const id = req.params.id;
    const {name, isbn, author_id} = req.body;
    _.each(books, (book) => {
        if (book.id === id) {
            book.name = name;
            book.isbn = isbn;
            book.author_id = author_id;
        }
    });
    res.json({'modified':'ok'});
})

module.exports = router;