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
  const [notification, setNotification] = useState();
  const [successNotify, setSuccessNotify] = useState();

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
        .then(response => {

          if(!response.data.items) {
            setNotification(true)
          }
          setBooks(response.data.items)

        })
        .catch(err => console.log(err));
    }
  };

  function removeNotification() {
    setNotification(false)
  }

  function removeSuccessNotify() {
    setSuccessNotify(false);
  }

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
    }).then((response) => {
      if(response.status === 200) {
        setSuccessNotify(true);
      }
    }).catch((err) => console.log(err));
  }

  const notificationStyle = {
    position: "fixed",
    top: "50%",
    left: 0,
    zIndex: 2,
    width: "100%",    
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

        {successNotify ? (
            <div className="notification is-success has-text-centered is-size-3" style={notificationStyle}>
              <button onClick={() => removeSuccessNotify()} id="remove-success-notify" className="delete"></button>
                 Your book has been saved! Happy reading! 😊
            </div> ) : null }

        {books && books.length ? (
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
            ) : null}

      {notification ? (
        <div className="notification is-danger has-text-centered">
          <button onClick={() => removeNotification()} id="remove-notification" className="delete"></button>
          No books found. Please try again.
        </div> ) : null }
     </Main>
    );
  }
  
  export default SearchPage;