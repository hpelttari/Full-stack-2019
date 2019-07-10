import React, { useState } from 'react'
import Persons from './components/Persons'
import Filter from './components/Filter'
import AddPerson from './components/AddPerson';


const App = () => {
  const [persons, setPersons] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ])
  
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')

  const [condition, setCondition ] = useState('')


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

  const handleConditionChange = (event) => {
    setCondition(event.target.value)
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }


  let filtered = persons.filter(person => person.name.includes(condition))
 

  return (
    <div>
      <h2>Puhelinluettelo</h2>
      
      <div>Rajaa näytettäviä {<Filter condition={condition} handleConditionChange={handleConditionChange}/>}</div>

      <h2>Lisää uusi</h2>
        {<AddPerson addPerson={addPerson} newName={newName} newNumber={newNumber} handleNumberChange={handleNumberChange} handleNameChange={handleNameChange}/>}

      <h2>Numerot</h2>
        {<Persons persons={filtered}/>}
    </div>
  )

}

export default App
