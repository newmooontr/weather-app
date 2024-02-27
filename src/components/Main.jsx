import React,{useEffect, useState} from 'react'
import Container from "react-bootstrap/Container";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import axios from "axios";
import CardStyle from './Card';




//localStorage.setItem(
  //"tokenKey",
  //"RAPAIooyOVFdRNn7gPi6i8vUp3OJvy0Np5wgMGgNO0a2a258kya95/arqJmhPrWc"
//);

const Main = () => {

  const [search, setSearch]= useState("")
  const [weatherData, setWeatherData]= useState()


  const tokenKey = localStorage.getItem("tokenKey");
  const inputValue = search;
  const units = "metric";
  const lang = "tr";

  const baseurl = `http://api.weatherapi.com/v1`; 



const handleSearch = (event) =>{
  console.log(search)

const getData = async ()=>{
  const url = `${baseurl}/current.json?key=799b62f210af49be99d114946232105&q=${inputValue}&lang=${lang}`
      const {data} = await axios.get(url,);
      console.log(data)
      setWeatherData(data);
    };

    
      getData();
   
    
  }

  return (
    <Container >
    <InputGroup className="mb-3 w-25 ">
        <Form.Control 
          name="search"
          placeholder="Search for a city"
          aria-label="Recipient's username"
          aria-describedby="basic-addon2"
          onChange={(e)=>setSearch(e.target.value)}
          />
        <Button className='btn btn-danger text-white ' onClick={handleSearch} variant="outline-secondary" id="button-addon2">
          Search
        </Button>
      </InputGroup>

      <CardStyle weatherData={weatherData}/>
      

    </Container>
  )
}

export default Main