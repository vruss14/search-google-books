import React, { useState } from "react";
import API from "../utils/API.js";

function SavedBook(props) {

  // function deleteBookFromDatabase(event) {
  //   event.preventDefault();

  //   console.log(event.target.value);

  //   API.deleteBook(event.target.value)
  //   .catch(err => console.log(err));
  // }

  return (
    <div className="border p-3 mt-4 mb-4">
      <div className="text-right">
        <a target="_blank" rel="noreferrer" href={props.link}><button className="btn btn-primary ml-2 mr-2">View</button></a>
        <button onClick={(event) => props.deleteBookFromDatabase(event)} 
          className="btn btn-danger ml-2 mr-2"
          value={props.id}>Delete</button>
      </div>

      <h2>{props.title}</h2>
      <p>{props.authors}</p>

      <div className="d-flex flex-lg-row flex-column">
        <img src={`${props.image}`} className="mb-5" width="128px" />
        <p className="ml-5 mr-5">{props.description}</p>
      </div>

    </div>

  );
}

export default SavedBook;