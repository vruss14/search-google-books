import React from "react";

// The Footer on each page

function Footer() {

  return (
    <footer className="footer has-background-black has-text-white mb-0">
        <div className="content has-text-centered">
            <p>
            Web application created by <a href="https://www.github.com/vruss14">Valerie Russell</a>. 
            Data from the
            <a href="https://developers.google.com/books"> Google Books API</a>.
            </p>
        </div>
    </footer>
  );
}

export default Footer;