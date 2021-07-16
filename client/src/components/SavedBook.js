import React from "react";

// The saved books are rendered from the database
// Deleting a book from the database will immediately remove it from the page

function SavedBook(props) {

  function checkImg() {
    if(props.image) {
      return (
        <figure>
          <img className="mb-5" src={props.image} width="50%" height="50%" alt="Book cover" />
          <br />
        </figure>
      ) 
    }
    return null;
  }

  return (

    <div className="box p-6">
    <div className="columns is-desktop is-vcentered">
      <div className="column is-third has-text-centered">
        {checkImg()}          
        <a target="_blank" rel="noreferrer" href={props.link}><button className="button is-primary is-size-5 ml-2 mr-2">View</button></a>
        <button onClick={(event) => props.deleteBookFromDatabase(event)}
        className="button is-danger is-size-5 ml-2 mr-2" value={props.id}>Delete</button>
      </div>

      <div className="column is-two-thirds has-text-centered">
        <h2 className="is-size-4">{props.title}</h2>
        <p>{props.authors === "By: " ? "No authors to show." : props.authors}</p>
        <p className="ml-5 mr-5 has-text-left">{props.description}</p>
      </div>
    </div>
  </div>
  );
}

export default SavedBook;