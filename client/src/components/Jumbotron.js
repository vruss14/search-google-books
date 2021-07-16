import React from "react";

// Includes the title of the app and explains functionality

function Jumbotron() {
    return (
        <section className="hero is-link mt-6 mb-5 has-text-centered">
            <div className="hero-body">
                <p className="title is-size-1 mb-5">
                (React) Google Books Search
                </p>
                <p className="subtitle is-size-3">
                Search for and save books of interest.
                </p>
            </div>
        </section>
    )
}

export default Jumbotron;