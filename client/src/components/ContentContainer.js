import React from "react";

function ResultsContainer(props) {
  return (
      <div className = "m-5 border p-5">
          <h1 className="mb-5">{props.containerTitle}</h1>
          {props.children}
        </div>

  );
}

export default ResultsContainer;