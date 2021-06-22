import React from "react";

function Result(props) {

  return (
    <div className="border p-3 mt-4 mb-4">
      <div className="text-right">
        <a target="_blank" rel="noreferrer" href={props.link}><button className="btn btn-primary ml-2 mr-2">View</button></a>
          <button onClick={(event) => props.save(event)} 
          className="btn btn-primary ml-2 mr-2"
          value={JSON.stringify({
            id: props.id,
            title: props.title,
            authors: props.authors,
            description: props.description,
            image: props.image,
            link: props.link
          })}>Save</button>
      </div>

      <h2>{props.title}</h2>
      <p>{`By: ${props.authors}`}</p>

      <div className="d-flex flex-lg-row flex-column">
        <img src={`${props.image}`} className="mb-5" width="128px" />
        <p className="ml-5 mr-5">{props.description}</p>
      </div>

    </div>

  );
}

export default Result;