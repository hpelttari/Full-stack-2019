import React, { useState, useEffect } from 'react'
import axios from 'axios'
import Countries from './components/Countries'
import Filter from './components/Filter'

function App() {

  const [countries, setCountries] = useState([ ])

  const hook = () => {
    axios
      .get('https://restcountries.eu/rest/v2/all')
      .then(response => {
        setCountries(response.data)
      })
  }

  useEffect(hook, [])

  const [condition, setCondition ] = useState('')

  const handleConditionChange = (event) => {
    setCondition(event.target.value)
  }


  let filtered = countries.filter(country => country.name.includes(condition))

  return (
    <div>
      
      <div>Find Countries {<Filter condition={condition} handleConditionChange={handleConditionChange}/>}</div>
      {<Countries countries={filtered}/>}
    </div>
  );
}

export default App;
