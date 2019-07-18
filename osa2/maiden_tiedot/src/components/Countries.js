import React from 'react'
import Country from './Country'
import Name from './Name'

const Countries = ({ countries }) => {
    if (countries.length < 10){
        if(countries.length === 1){
    return(
        countries.map(country => <Country key={country.name} country={country}/>) 
    )
        }
    return (
        countries.map(country => <Name key={country.name} country={country}/>)    
    )
    }
    return(
        <div>
            Too many mathces, specify another filter
        </div>
    )
}

export default Countries