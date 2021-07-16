import React from "react";

// The container that holds the results from searching the API

function ResultsContainer(props) {

  const customStyle = {
    marginBottom: "5%"
  }
  return (
      <div className = "container" style={customStyle}>
          <h1 className="mb-5 has-text-centered is-size-1 has-text-weight-bold">{props.containerTitle}</h1>
          {props.children}
      </div>

  );
}

export default ResultsContainer;