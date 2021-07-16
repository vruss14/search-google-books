import React from "react";

// Each result is rendered based on the props that come from the Google Books API

function Result(props) {

  // Checks if there is an image associated with the book then returns the image if true

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

  // Checks 3 cases: multiple authors, single author, and no authors so that the correct information displays
  
  function checkAuthors() {

    if(props.authors) {

      if(props.authors.length > 1) {
        const joinedArr = props.authors.join(" and ");
        return <p className="mb-3 is-size-5">{`By: ${joinedArr}`}</p>
      }
      return <p className="mb-3 is-size-5">{`By: ${props.authors}`}</p>
    }
    return null
  }

  // The Save button stringifys the props for that specific result and saves them to the database

  return (
    <div className="box p-6">
      <div className="columns is-desktop is-vcentered">
        <div className="column is-third has-text-centered">
          {checkImg()}          
          <a target="_blank" rel="noreferrer" href={props.link}><button className="button is-primary is-size-5 ml-2 mr-2">View</button></a>
          <button 
          onClick={(event) => props.save(event)} 
          className="button is-link is-size-5 ml-2 mr-2"
          value={JSON.stringify({
            id: props.id,
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
          })
        }>Save</button>
        </div>

        <div className="column is-two-thirds has-text-centered">
          <h2 className="is-size-4">{props.title}</h2>
          {checkAuthors()}
          <p className="ml-5 mt-2 mr-5 has-text-left">{props.description}</p>
        </div>
      </div>
    </div>
);

}

export default Result;