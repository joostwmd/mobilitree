import React from 'react'
import {useState} from 'react'

function CarCard() {
   
    const [carType, setCarType] = useState("small")
    const [fuelType, setFuelType] = useState("gas")
    // const [electricType, setElectricType] = useState("electric")
    const [distance, setDistance] = useState()
    const [powerMix, setPowerMix] = useState("")

    const [isElectric, setIsElectric] = useState(false)
    

    // const [useBus, setUseBus] = useState(0) =>  0 ==> only bus, 1 ==> mostly bus
   
    const cars = []
    const [allCars, setAllCars] = useState(cars)
    


    const addCar = () => {
        cars.push({
            fuelType : fuelType,
            powerMix : powerMix,
            carType : carType, 
            distance : distance,
        })
        
        const newCarList = allCars.concat({
            fuelType : fuelType,
            powerMix : powerMix,
            carType : carType, 
            distance : distance
        })
        
        setAllCars(newCarList) 

    }

    const handleFuelTypeChange = (e) => {
        setFuelType(e.target.value)

        if (e.target.value === "electric" || e.target.value === "plug_in_hybrid"){
            document.getElementById('powerMix').removeAttribute('disabled')
            setPowerMix("ch")

        } else {
            document.getElementById('powerMix').setAttribute("disabled", "select")
            setPowerMix("")
        }
    }

    const test = () => {
        console.log(allCars)
    }

    const fuelTypes = ["gas", "diesel", "hybrid", "biogas", "naturalgas", "biodiesel", "ethanol_10", "ethanol_85", "electric", "plug_in_hybrid"]
    // const electricTypes = ["electric",  "plug_in_hybrid"]
    const carTypes = ["small", "midsize", "luxury_suv_van"]
    const powerMixes = ["ch", "de", "rest", "at", "certified_green", "se"]




    return (
        <div>
            {allCars.map(car => {
                if (car.fuelType === "electric" || car.fuelType === "plug_in_hybrid"){
                    return (
                    <ul>
                       <li>fuel type : {car.fuelType}</li>
                       <li>power mix : {car.powerMix}</li>
                       <li>car types : {car.carType}</li>
                       <li>distance in km : {car.distance}</li>
                    </ul>
                    )
                } else {

                    return (
                    <ul>
                       <li>fuel type : {car.fuelType}</li>
                       <li>car types : {car.carType}</li>
                       <li>distance in km : {car.distance}</li>
                    </ul>
                )
                }
            })}

            <select id="fuelType"
                    onChange = {handleFuelTypeChange}>
                {fuelTypes.map(fuelType => {
                    return (
                        <option value = {fuelType}>{fuelType.replaceAll("_", " ")}</option>
                    )
                })}
            </select>

            <select id="powerMix"
                    onChange = {e => setPowerMix(e.target.value)}
                    disabled>
                {powerMixes.map(powerMix => {
                    return (
                        <option value = {powerMix}>{powerMix.replaceAll("_", " ")}</option>
                    )
                })}
            </select> 

            <select id="carType"
                    onChange= {e => setCarType(e.target.value)}>
                {carTypes.map(carType => {
                    return (
                        <option value={carType}>{carType.replaceAll("_", " ")}</option>
                    )
                })}

            </select>

            <input type="number" min={0} max={100000}
                    onChange={e => setDistance(e.target.value)}>
                    
            </input>

            <button onClick={addCar}>add car</button>
            <button onClick={test}>console log all cars</button>


            
        </div>
    )
}

export default CarCard
