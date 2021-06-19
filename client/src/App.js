import React, { Component } from "react";
import logo from "./logo.svg";

import Main from "./components/Main";
import NavBar from "./components/NavBar";
import Jumbotron from "./components/Jumbotron";
import SearchForm from "./components/SearchForm";
import ResultsContainer from "./components/ResultsContainer";
import Result from "./components/Result";

import "./App.css";

function App() {
  return (
   <Main>
     <NavBar />
     <Jumbotron />
     <SearchForm />

     <ResultsContainer>
       <Result />
       <Result />
     </ResultsContainer>
   </Main>
  );
}

export default App;
