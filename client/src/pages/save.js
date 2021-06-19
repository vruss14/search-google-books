import Main from "../components/Main";
import NavBar from "../components/NavBar";
import Jumbotron from "../components/Jumbotron";
import ContentContainer from "../components/ContentContainer";
import SingleBook from "../components/SingleBook";

function SavePage() {
    return (
     <Main>
       <NavBar />
       <Jumbotron />
  
       <ContentContainer
       containerTitle="Saved Books">
         <SingleBook />
         <SingleBook />
       </ContentContainer>
     </Main>
    );
  }
  
  export default SavePage;