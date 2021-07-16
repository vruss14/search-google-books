import React from "react";
import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";

// Renders if user visits a path that does not exist in the site

function PageNotFound() {

    return (
     <Main>
       <NavBar />
       <Jumbotron />
       <section className = "is-desktop has-text-centered">
          <h1 className="mt-5 ml-4 mr-4 mb-3 has-text-weight-bold is-size-2">
            404: Page Not Found</h1>
           <a href="/">
               <button className="button is-link is-size-5 ml-2 mr-2 mt-5">
               Return Home</button>
            </a>
        </section>
     </Main>
    );
  }
  
  export default PageNotFound;
