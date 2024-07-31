import React,{useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CardStyle from './Card';
import Clouds from '../assets/clouds.jpeg';


const apiUrl = process.env.REACT_APP_API_URL;
const apiKey = process.env.REACT_APP_API_KEY;


//localStorage.setItem(
  //"tokenKey",
  //"RAPAIooyOVFdRNn7gPi6i8vUp3OJvy0Np5wgMGgNO0a2a258kya95/arqJmhPrWc"
//);

const Main = () => {

  const [search, setSearch]= useState("")
  const [weatherData, setWeatherData]= useState()


  
  const inputValue = search;
  const lang = "tr";




const handleSearch = (event) =>{
  

const getData = async ()=>{
  const url = `${apiUrl}/current.json?key=${apiKey}&q=${inputValue}&lang=${lang}`
      const {data} = await axios.get(url,);
    
      setWeatherData(data);
    };

    
      getData();
   
    
  }

  return (
    <>
    
    <Container className='w-100 flex-grow-1 d-flex flex-column align-items-center pt-5'>
    <InputGroup className="mb-3 w-25">
        <Form.Control 
          name="search"
          placeholder="Search for a city"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearch(e.target.value)}
          />
        <Button className='btn  text-black ' onClick={handleSearch} variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      <CardStyle weatherData={weatherData}/>
      

    </Container>
    </>
    
  )
}

export default Main