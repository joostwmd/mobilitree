import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import SearchBarAutocomplete from '../components/SearchBarAirports'

// components 
import FlightCard from '../components/FlightCard'
import CarCard from '../components/CarCard'


function CalculatorEmission() {
 
   const [clickedCalculation, setClickedCalculation] = useState(false) 

   const calculateEmission = () => {

   }

   const handleCalculation = () => {
    setClickedCalculation((prev) => !prev);
   }

   const handleCompensation= () => {
     //link to compensation page 
   }


   //FLIGHTS
   
       
    return (
        <div>
        {/* <SearchBarAutocomplete /> */}

        <FlightCard /* props => result *//>  

        <CarCard /* props => result */ />


        <h2>Bus & Bahn</h2>
        <h2>Auto</h2>

        <button onClick={handleCalculation}>ausstoß berechnen</button>

        </div>
    )
   
    
}

export default CalculatorEmission
