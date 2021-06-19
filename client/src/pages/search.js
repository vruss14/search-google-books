import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import SearchForm from "../components/SearchForm";
import ContentContainer from "../components/ContentContainer";
import SingleBook from "../components/SingleBook";

function SearchPage() {
    return (
     <Main>
       <NavBar />
       <Jumbotron />
       <SearchForm />
  
       <ContentContainer
        containerTitle="Results">
         <SingleBook />
         <SingleBook />
       </ContentContainer>
     </Main>
    );
  }
  
  export default SearchPage;