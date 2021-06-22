import React from "react";

// The container that holds the results from searching the API

function ResultsContainer(props) {
  return (
      <div className = "m-5 border p-5">
          <h1 className="mb-5">{props.containerTitle}</h1>
          {props.children}
        </div>

  );
}

export default ResultsContainer;