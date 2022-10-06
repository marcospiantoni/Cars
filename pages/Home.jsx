import React, { useState } from 'react';
import NavBar from '../components/NavBar'; 
import CarCard from '../components/CarCard';
import { Container } from '@mui/system';
import axios from 'axios'
import { Grid } from '@mui/material';
import { useEffect } from 'react';

export default function Home() {

  const [cars, setCars] = useState([ ])

  useEffect(() =>{
 getCars()
  },[]) 
  
const getCars= (tiltle) =>{

  const axios = require("axios");

  const options = {
    method: 'GET',
    url: 'https://all-cars.p.rapidapi.com/cars',
    headers: {
      'X-RapidAPI-Key': '546a6b47ecmsh9e79a34756efdd0p12ca89jsn07b5f2394836',
      'X-RapidAPI-Host': 'all-cars.p.rapidapi.com'
    }
  };
  
  axios.request(options).then(function (response) {
    setCars(response.data);
  }).catch(function (error) {
    console.error(error);
  });
}

const carsFilter = (tiltle) =>{
 var filterCars = []
  if(tiltle === ""){
    getCars();
  }
 for(var i in cars){
  if(cars[i].title.includes(tiltle)){
    filterCars.push(cars[i]);
  };
 };
setCars(filterCars);
};


  return(
    <div>
      <NavBar carsFilter={carsFilter}/>
      <Container maxWidth="false">
      <Grid container spacing={3}>
        {cars.map((car, key) =>(
          <Grid item xs={3} key={key}>
             <CarCard title={car.title} img={car.img}/>
        </Grid> 
        ))}
      </Grid>  
     </Container>
    </div> 
  );
};
