import React, { useState } from 'react'
import Person from './components/Person'


const App = () => {
  const [ persons, setPersons] = useState([
    { name: 'Arto Hellas',
      number: "040-1234567" 
    }
  ]) 
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')


  const addPerson = (event) => {
    event.preventDefault()
    const personObject = {
      name : newName,
      number : newNumber
    }

    let names = persons.map(person => person.name)

    if(names.includes(personObject.name)){
      alert(`${personObject.name} is already added to phonebook`)
    } else{
      setPersons(persons.concat(personObject))
      setNewName('')
      setNewNumber('')
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      <form onSubmit={addPerson}>
        <div>Nimi: <input value={newName}
          onChange={handleNameChange} /></div>
          <div>Numero: <input value={newNumber}
          onChange={handleNumberChange}/></div>
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
