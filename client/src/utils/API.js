import axios from "axios";

export default {
  // Search the Google Books API
  searchBooks: function(event) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${event.query}&key=${process.env.REACT_APP_API_KEY}`);
  },

  getBooks: function() {
    return axios.get("/api/books");
  },

  saveBook: function(bookData) {
    return axios.post("/api/books", bookData, {
        headers: {
            'Content-Type': 'application/json' 
        }
    });
  },

  deleteBook: function(id) {
    return axios.delete("/api/books/" + id);
  },

};
