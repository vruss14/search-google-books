import React, { useState } from "react";
import API from "../utils/API.js";

function SearchForm() {

    const [formObject, setFormObject] = useState({})
  
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
          .then(response => console.log(response))
          .catch(err => console.log(err));
      }
    };

    return (
        <form className="m-5 border p-3">
            <h4 className="mb-1">Book Search</h4>
            <div className="form-group">
                <label className="mt-2 mb-2">Book</label>
                <input onChange={handleInputChange} name = "query" type="text" className="form-control mt-2 mb-2" id="booksearch" placeholder="Search a book here..." />
            </div>
            <div className="text-right">
                <button onClick={handleFormSubmit} type="submit" className="btn btn-primary">Search</button>
            </div>

        </form>
    )
}

export default SearchForm;