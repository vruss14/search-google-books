import React from "react";

// Includes the title of the app and explains functionality

function Jumbotron() {
    return (
        <div className="jumbotron jumbotron-fluid mt-5 mb-5 text-center bg-success text-white">
            <div className="container">
                <h1 className="display-4">(React) Google Books Search</h1>
                <p className="lead">Search for and save books of interest.</p>
            </div>
        </div>
    )
}

export default Jumbotron;