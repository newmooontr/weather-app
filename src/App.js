import Main from "./components/Main";
import Card from "./components/Card";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Container from "react-bootstrap/Container";
import './App.css';



function App() {
  return (
    <div  className="App">

    <Container className="d-flex flex-column align-items-center" style={{minHeight:'90vh'}}>
      <Header/>
      <Main/>
      <Footer/>
  
    </Container>
    </div>
  );
}

export default App;
