import React, { useState } from 'react'
import Person from './components/Person'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas' }
  ]) 
  const [ newPerson, setNewPerson ] = useState('')

  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name : newPerson
    }
    setPersons(persons.concat(personObject))
    setNewPerson('')
  }

  const handlePersonChange = (event) => {
    setNewPerson(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>
          nimi: <input 
          value={newPerson}
          onChange={handlePersonChange}/>
        </div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
      <h2>Numerot</h2>
        {persons.map(person => <Person key={person.name} person={person}/>)}
    </div>
  )

}

export default App
