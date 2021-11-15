import React from 'react'
import Tomap from './Tomap'


/**
 * creates an array with the .map method 
 * and gives a key the each element 
 * 
 * @returns 
 */
export default function TodoList({todoList, toggleCheckbox}) {
    return (
        todoList.map(element =>{
            return <Tomap key={element.id} toggleCheckbox={toggleCheckbox} todomap={element}/>
        })
    )
}
