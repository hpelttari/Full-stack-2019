import React from 'react'

const Filter = ( {condition, handleConditionChange} ) => {
    return (
        <input value={condition}
          onChange={handleConditionChange}/>
    )
}

export default Filter