import React, { useState } from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import ContentContainer from "../components/ContentContainer";
import Result from "../components/Result";
import API from "../utils/API.js";

function SearchPage() {

  const [formObject, setFormObject] = useState({})
  const [books, setBooks] = useState([]);
  const [savedBooks, setSavedBooks] = useState([]);
  
  function handleInputChange(event) {
    const { name, value } = event.target;
    setFormObject({...formObject, [name]: value})
  };

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
  
  function handleSave(event) {
    event.preventDefault();

    setSavedBooks([...savedBooks, event.target.value]);

  }

  function checkSaved() {
    console.log(savedBooks);
  }

  checkSaved();
    
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
                      authors={book.volumeInfo.authors}
                      description={book.volumeInfo.description}
                      image={book.volumeInfo.imageLinks.thumbnail}
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