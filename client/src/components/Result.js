import React from "react";

function Result() {
  return (
    <div className="border p-3">
        <h2>Test Book Title</h2>
        <p className="mt-3">This is where the book description will be displayed.</p>
        <p>Test Author</p>

        <div className = "d-flex flex-row">
            <img src = "https://picsum.photos/200" className="mb-5" />
            <p className = "ml-5 mr-5">This is a long description for the book. It will need to be floated right, but for now it will appear as a block element.
                This is text to build up the body of the description so that it appears very long, much longer than anything else in the container.
            </p> 
        </div>


    </div>

  );
}

export default Result;