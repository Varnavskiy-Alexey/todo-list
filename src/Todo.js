import React from "react"
import './Todo.css'
function Todo({todo, change, remove, i}) {
    return (
        <div className="Todo">
            <input 
                type="checkbox" 
                className="cx"
                onChange={(e) => {
                    change({...todo, checked: !todo.checked})
                }} 
                checked={todo.checked}
                >
                </input>
            <label className={todo.checked? 'label checked': 'label'}

            ><b>{i+1}</b> {todo.title}</label>
            <button 
                className="button"
                onClick={(e) => {
                    remove({...todo})
                }}
            >x</button>
        </div>
    )    
}

export default Todo