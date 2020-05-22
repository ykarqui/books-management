const { Router } = require('express');
const router = Router();
const _ = require('lodash');

const books = require('../books.json');

// Get all books
router.get('/books', (req, res) => {
    res.status(200).json(books);
})

// Get all books with specified author_id
router.get('/books/:authorid', (req, res) => {
    const authorId = req.params.authorid;
    let count = 0;
    let booksByAuthor = [];

    _.each(books, (book) => {
        if (book.author_id === authorId) {
            count ++;
            booksByAuthor.push(book);
        }
    });

    res.status(200).json(booksByAuthor);
})

// Add a book
router.post('/books', (req, res) => {
    const {name, isbn, author_id} = req.body;
    if(name && isbn && author_id){
        const newBook = {...req.body };
        books.push(newBook);
        res.status(201).json({'added': 'ok'});
    } else {
        res.status(400).json({'statusCode': 'Bad request'});
    }
});

// Delete a book by id
router.delete('/books/:id', (req, res) => {
    const id = req.params.id;
    _.remove(books, (book) => {
        return book.id === id;
    });
    res.status(200).json(books);
});

// Modify a book
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
    res.status(200).json({'modified':'ok'});
})

module.exports = router;