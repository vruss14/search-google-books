const router = require('express').Router();
const { Book } = require('../../models');

// These routes are for the /api/books endpoint

router.get('/', async (req, res) => {
    // Retrieve all saved books

    try {
      const bookData = await Book.find(req.query)
  
      if (!bookData) {
        res.status(404).json({ message: 'No saved books found.' });
        return;
      }
  
      res.status(200).json(bookData);
      console.log('\n', "All books have been successfully retrieved!", '\n')
      console.log(bookData);

    } catch (err) {
      res.status(500).json(err);
      console.log(err);
    }
  });

router.post('/', async (req, res) => {
    // Save a book

    try {
    const newBook = await Book.create(req.body);

    res.status(200).json([{ message: 'The book was successfully saved!' }, newBook]);
    console.log('\n', "The book was successfully saved!", '\n');
    console.log(newBook);

  } catch (err) {
    res.status(500).json(err);
    console.log(err);

  }

  });

module.exports = router;