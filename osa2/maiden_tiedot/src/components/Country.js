import React from 'react'
import List from './List'
import Image from './Image'

const Country = ({ country }) => {
    return (
        <div>
            <h1>{country.name}</h1>
            <p>capital {country.capital}</p>
            <p>population {country.population}</p>
            <h2> languages </h2>
            <List key={country.name} elements={country.languages} />
            <Image key={country.flag} image={country.flag}/>
        </div>
    )
}

export default Country