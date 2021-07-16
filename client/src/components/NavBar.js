import React from "react";

// Users can navigate to the Search or Save pages

function NavBar() {

    document.addEventListener('DOMContentLoaded', () => {
        const $navbarBurgers = Array.prototype.slice.call(document.querySelectorAll('.navbar-burger'), 0);
      
        if ($navbarBurgers.length > 0) {
          $navbarBurgers.forEach( el => {
            el.addEventListener('click', () => {
              const target = el.dataset.target;
              const $target = document.getElementById(target);
              el.classList.toggle('is-active');
              $target.classList.toggle('is-active');
            });
          });
        }
      
    });
    return (
        <nav className="navbar is-black has-shadow is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false" data-target="navbar">
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbar" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item ml-3 mr-3 is-size-3" href="/">
                        Search Google Books
                    </a>
                </div>

                <div className="navbar-end">
                    <a className="navbar-item ml-3 mr-3 is-size-4" href="/search">
                        Search
                    </a>
                    <a className="navbar-item ml-3 mr-3 is-size-4" href="/saved">
                        Saved
                    </a>
                </div>
            </div>
        </nav>
    )
}

export default NavBar;