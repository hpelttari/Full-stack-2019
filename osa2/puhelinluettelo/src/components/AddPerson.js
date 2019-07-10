import React from 'react'

const AddPerson = ( {addPerson, newName, newNumber, handleNumberChange, handleNameChange} ) => {
    return (
        <form onSubmit={addPerson}>
        <div>Nimi: <input value={newName}
          onChange={handleNameChange} /></div>
          <div>Numero: <input value={newNumber}
          onChange={handleNumberChange}/></div>
        <div>
          <button type="submit">lisää</button>
        </div>
      </form>
    )
}

export default AddPerson