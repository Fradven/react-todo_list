import React from 'react'



/**
 * output the value introduced and add to it a checkbox
 * 
 * @returns new div w/ label and checkbox
 */
export default function Tomap({todomap, toggleCheckbox}) {
    function handleTodoClick() {
        toggleCheckbox(todomap.id)
      }
    return (
        <div className="todo__item">
            <label>
            <input className="todo_exput" type="checkbox" checked={todomap.complete} onChange={handleTodoClick}/>
            {todomap.name}
            </label>
        </div>
    )
}