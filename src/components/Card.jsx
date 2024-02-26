import {Card,CardText,Image} from 'react-bootstrap';
import { TbTemperatureCelsius } from "react-icons/tb";


const CardStyle=({weatherData})=> {
    console.log('=>', weatherData)


  

  return (
    <Card className="mt-5 mb-5 shadow-lg border border-light p-3 mb-3 mt-3 bg-white rounded" style={{ width: '20rem', height:'30rem' }}>
      <Card.Body >
        
        <Card.Title class="fs-1"> {weatherData?.location.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">{weatherData?.location.country}</Card.Subtitle>
        <Card.Text style={{fontSize:'70px'}} class="fw-bold">
         {weatherData?.current.temp_c} <span style={{fontSize:"50px", fontWeight:"lighter"}}> <sup>&#8451;</sup></span> 
        </Card.Text>

        <Image src={weatherData?.current.condition.icon} style={{width:'150px'}}/>
        <Card.Text  className="fw-bold fs-1" >
         {weatherData?.current.condition.text} 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardStyle;


