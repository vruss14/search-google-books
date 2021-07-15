import React, { useState } from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import ContentContainer from "../components/ContentContainer";
import Result from "../components/Result";
import API from "../utils/API.js";


// The Search Page handles all user queries 

function SearchPage() {

  const [formObject, setFormObject] = useState({})
  const [books, setBooks] = useState([]);
  
  // Any time the query field changes, the formObject gets updated with that value

  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

  // Submitting the form with a valid query runs the axios function to get data from the API

  function handleFormSubmit(event) {
    event.preventDefault();
    if (formObject.query) {
      API.searchBooks({
        query: formObject.query,
      })
        .then(response => setBooks(response.data.items))
        .catch(err => console.log(err));
    }
  };
  
  // This function reads the data from the result that the user clicked the save button on and posts it to the database
  // Handling for multiple authors (so that the database can always expect a string)
  
  function handleSave(event) {
    event.preventDefault();
    const book = JSON.parse(event.target.value);
    let authorOutput;

    if(Array.isArray(book.authors)) {
      const authorString = book.authors.join(' and ');
      authorOutput = `By: ${authorString}`
    } else {
      authorOutput = `By: ${book.authors}`;
    }

    API.saveBook({
      id: book.id,
      title: book.title,
      authors: authorOutput,
      description: book.description,
      image: book.image,
      link: book.link
    }).catch((err) => console.log(err));
  }
    
    return (
     <Main>
       <NavBar />
       <Jumbotron />
       <SearchForm
       name="BookSearch"
       value={formObject}
       onChange={handleInputChange}
       onClick={handleFormSubmit}
        />

       {!books.length ? (
              <h1 className="text-center">No Books to Display</h1>
            ) : (
              <ContentContainer containerTitle = "Results">
                {books.map(book => {
                  return (
                    <Result
                      key={book.id}
                      id={book.id}
                      title={book.volumeInfo.title}
                      authors={book.volumeInfo.authors === undefined ? "" : book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks === undefined ? "" : book.volumeInfo.imageLinks.thumbnail}
                      link={book.volumeInfo.previewLink}
                      save={handleSave}
                    />
                  );
                })}
              </ContentContainer>
            )}
     </Main>
    );
  }
  
  export default SearchPage;