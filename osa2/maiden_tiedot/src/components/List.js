import React from 'react'
import ListElement from './ListElement'

const List = ({ elements }) => {
return(
    <ul>
    {elements.map(e => <ListElement key={e.name} element={e.name}/>)}
    </ul>
)
}

export default List