import React from 'react'
import { Link } from 'react-router-dom'

function home() {
    return (
        <div>
           <h1>mobilitree</h1>
           <p>bäume und so, CO2 und so</p> 
           <Link to="/emission">
               <button>lets go</button>
           </Link>
        </div>
    )
}

export default home
