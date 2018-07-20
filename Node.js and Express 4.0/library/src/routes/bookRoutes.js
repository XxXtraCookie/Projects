const express = require('express');

const bookRouter = express.Router();

function router(nav) {
  const books = [{
    title: 'Example Title 1',
    genre: 'History',
    author: 'Example Author 1',
    read: false
  },
  {
    title: 'Example Title 2',
    genre: 'History',
    author: 'Example Author 2',
    read: false
  },
  {
    title: 'Example Title 3',
    genre: 'History',
    author: 'Example Author 3',
    read: false
  },
  {
    title: 'Life On The Mississippi',
    genre: 'History',
    author: 'Mark Twain',
    read: false
  }];
  bookRouter.route('/')
    .get((req, res) => {
      res.render(
        'bookListView',
        {
          nav,
          title: 'Library',
          books
        });
    });

  bookRouter.route('/:id')
    .get((req, res) => {
      const { id } = req.params;
      res.render(
        'bookView',
        {
          nav,
          title: 'Library',
          book: books[id]
        });
    });

  return bookRouter;
}

module.exports = router;
