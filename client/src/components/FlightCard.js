import axios from 'axios'
import React from 'react'
import { useState } from 'react'

export default function FlightCard() {
   
    const flights = []
    const [allFlights, setAllFlights] = useState(flights)
    const [departure, setDeparture] = useState("")
    const [arrival, setArrival] = useState("")   
    const [doubleFlight, setDoubleFlight] = useState(false)
       
        const handleDoubleFlight = () => {
            setDoubleFlight((prev) => !prev)
        }
    
    
        const addFlight = (e) => {
            e.preventDefault()

            if(doubleFlight === true){
                flights.unshift(
                    {departure : departure,
                     arrival : arrival},
    
                    {departure : arrival,
                    arrival : departure}
                    )
    
                    const newFlightList = allFlights.concat({departure : departure,  arrival : arrival}, {departure : arrival, arrival: departure})
                    setAllFlights(newFlightList) 
                
            } else if(doubleFlight === false){
                flights.unshift(             
                    {departure : departure,
                     arrival : arrival}
                )
    
               const newFlightList = allFlights.concat({departure : departure,  arrival : arrival})
               setAllFlights(newFlightList) 
            }
            
        }

        const searchDepartureAirport = () => {
            axios.get(
                `/api/airports/?keyword=${departure}&page=${0}&subType=${'AIRPORT'}`
            )
            .then (res => {
                console.log(res)
                res.map(el => {
                    return (
                        <div onClick={setDeparture(el.iataCode)}>some amadeus response data</div>
                    )
                })
            })
        } 

        const searchArrivalAirport = () => {
            axios.get(
                `/api/airports/?keyword=${arrival}&page=${0}&subType=${'AIRPORT'}`
            )
            .then (res => {
                console.log(res)
                res.map(el => {
                    return (
                        <div onClick={setArrival(el.iataCode)}>some amadeus response data</div>
                    )
                })
            })
        } 

        
    
       const test = () => {
           console.log(allFlights)
           
       }
       //dosnt work yet 
       const deleteFlight = () => {
          const newFlight = flights.pop()
          setAllFlights(newFlight)
       }
   
   
    return (
        <div>
                <h2>Flüge</h2>
                 
                  <input 
                   type="text"
                   value={departure}
                   onChange={e => setDeparture(e.target.value)}
                 
                 />
                 <button onClick={searchDepartureAirport}>search Airport</button>
                 
                 <input 
                   type="text"
                   value={arrival}
                   onChange={e => setArrival(e.target.value)}
 
                 />
                  <button onClick={searchArrivalAirport}>search Airport</button>
                 
 
                 <input type="checkbox" onClick={handleDoubleFlight} />
                
 
                 <button onClick={addFlight}>flug hinzufügen</button>
                 <button onClick={test}>all flights</button>

                 {allFlights.map(flight => {
                     return (
                         <ul>
                             <li key={flights.indexOf(flight)}>abflug  : {flight.departure} , ankunft : {flight.arrival} <button onClick={deleteFlight}>delete</button></li>
                         </ul>
                     )
                 })} 
             
             
 
        </div>
    )
}
