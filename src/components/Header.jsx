
import Image from "react-bootstrap/Image";
import logo from "../assets/cw.jpeg"
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";



const Header = () => {
  return (
    <Container>

        <Image style={{marginTop:'30px'}} src={logo} width="60px"></Image>
  
        <h1 className="text-primary mb-5 " style={{fontSize:'40px'}}>Weather App</h1>


    </Container>
  )
}

export default Header;