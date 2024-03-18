import React from "react"
import Todo from "./Todo"
import './Todos.css'
function Todos({todos, change, remove}) {
    return (
        <div>
           <ul className="ul">
                {
                   todos.map((item, i) => {
                            return(
                            <Todo
                                key={i}
                                todo={item}
                                change={change}
                                remove={remove}
                                i={i}

                            />
                        )
                        })
                        
                        }
           </ul>
        </div>
    )    
}

export default Todos