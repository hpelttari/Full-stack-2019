import React, { useState } from 'react'
import Person from './components/Person'


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
      
      <div>Rajaa näytettäviä <input value={condition}
          onChange={handleConditionChange}/></div>

      <h2>Lisää uusi</h2>

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
        {filtered.map(person => <Person key={person.name} person={person}/>)}
    </div>
  )

}

export default App
