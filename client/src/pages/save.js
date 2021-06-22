import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import ContentContainer from "../components/ContentContainer";
import SavedBook from "../components/SavedBook";
import API from "../utils/API.js";


function SavePage() {

  const [savedBooks, setSavedBooks] = useState([]);

  useEffect(() => {

    API.getBooks()
      .then(res => {
        if (res.data.length === 0) {
          throw console.log("No results found.");
        }
        if (res.data.status === "error") {
          throw console.log(res.data.message);
        }
        setSavedBooks(res.data);
        return;
      })
      .catch(err => console.log(err));
  }, []);

    return (
     <Main>
       <NavBar />
       <Jumbotron />

       {!savedBooks.length ? (
         <h1 className="text-center">No Saved Books to Display</h1>
       ) : (
         <ContentContainer containerTitle = "Saved Books">
           {savedBooks.map(book => {
             return (
               <SavedBook
                 key={book.id}
                 id={book.id}
                 title={book.title}
                 authors={book.authors}
                 description={book.description}
                 image={book.image}
                 link={book.link}
               />
             );
           })}
         </ContentContainer>
       )}
     </Main>
    );
  }
  
  export default SavePage;
