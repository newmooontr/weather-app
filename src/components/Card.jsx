import {Card,CardText,Image} from 'react-bootstrap';
import { TbTemperatureCelsius } from "react-icons/tb";



const CardStyle=({weatherData})=> {
    


  

  return weatherData&&(
    <Card className={`mt-5 mb-5 shadow-lg border border-light p-3 mb-3 mt-3 bg-white rounded`}
    style={{ width: '20rem', height:'30rem' }}>
      <Card.Body>
        
        <Card.Title class="fs-1"> {weatherData?.location.name}</Card.Title>
        <Card.Subtitle className="mb-2 text-danger ">{weatherData?.location.country}</Card.Subtitle>
        <Card.Text style={{fontSize:'70px'}} className="fw-bold">
         {weatherData?.current.temp_c} <sup>°C</sup>
        </Card.Text>

        <Image src={weatherData?.current.condition.icon} style={{width:'150px'}}/>
        <Card.Text  className="fw-bold fs-5 text-center" >
         {weatherData?.current.condition.text} 
        </Card.Text>
      </Card.Body>
    </Card>
  );
}

export default CardStyle;


