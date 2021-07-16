import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import ContentContainer from "../components/ContentContainer";
import SavedBook from "../components/SavedBook";
import API from "../utils/API.js";

// The Save page loads the books from the database initially through the useEffect Hook
// When books are deleted, the list of books is reloaded

function SavePage() {

  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => { loadBooks() }, []);

  function loadBooks() {
    API.getBooks()
      .then(res => {
        if (res.data.status === "error") {
          throw console.log(res.data.message);
        }
        setSavedBooks(res.data);
      })
      .catch(err => console.log(err));
  };

  function deleteBookFromDatabase(event) {
    event.preventDefault();

    API.deleteBook(event.target.value)
    .then(res => loadBooks())
    .catch(err => console.log(err));
  }

    return (
     <Main>
       <NavBar />
       <Jumbotron />

       {!savedBooks.length ? (
         <section>
          <h1 className="has-text-centered mt-5 ml-4 mr-4 mb-3 has-text-weight-bold is-size-2">You haven't saved any books yet!</h1>
          <p className="subtitle is-size-3 has-text-centered ml-4 mr-4">
          📖 Search for books you're interested in on the Search page. 📖
          </p>
         </section>
       ) : (
         <ContentContainer containerTitle = "Saved Books">
           {savedBooks.map(book => {
             return (
               <SavedBook
                 key={book.title}
                 id={book._id}
                 title={book.title}
                 authors={book.authors}
                 description={book.description}
                 image={book.image}
                 link={book.link}
                 deleteBookFromDatabase={deleteBookFromDatabase}
               />
             );
           })}
         </ContentContainer>
       )}
     </Main>
    );
  }
  
  export default SavePage;
