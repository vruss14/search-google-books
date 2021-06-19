import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import ContentContainer from "../components/ContentContainer";
import SavedBook from "../components/SavedBook";

function SavePage() {
    return (
     <Main>
       <NavBar />
       <Jumbotron />
  
       <ContentContainer
       containerTitle="Saved Books">
         <SavedBook />
         <SavedBook />
       </ContentContainer>
     </Main>
    );
  }
  
  export default SavePage;