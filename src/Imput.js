import React, { useState } from "react"
import './Imput.css'

function Imput({addTodo}) {
    const [todoTitle, setTodoTitle] = useState('')
    return (
        <div className="imput">
            <input
                value={todoTitle}
                onChange={(e) => { setTodoTitle(e.target.value) }}
            ></input>
            <button
                className="button1"
                onClick={() => {
                    
                    if(todoTitle != ''){
                        setTodoTitle('')
                        addTodo({title: todoTitle, checked: false})
                    }else{
                        alert('Поле ввода не заполнено.')
                    }
                    
                } }
            >Add Todo</button>
        </div>
        
    )    
}

export default Imput