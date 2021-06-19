import axios from "axios";

// .env variable is returning as undefined

export default {
  // Search the Google Books API
  searchBooks: function(event) {
    return axios.get(`https://www.googleapis.com/books/v1/volumes?q=${event.query}&key=${process.env.REACT_APP_API_KEY}`);
  }
};
