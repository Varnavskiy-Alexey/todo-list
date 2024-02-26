
import './App.css';
import Header from './Header';
import Imput from './Imput';
import Todos from './Todos';
import { useState } from 'react';

let initialTodo = [
  // {title: 'title1', checked: false},
  // {title: 'title2', checked: false},
  // {title: 'title3', checked: false}
]

function App() {
  const[todos, setTodos] =useState([...initialTodo])

  const addTodo = (todo) => {
    setTodos(prev => {
      const tmp = [...prev]
      let findTodo = tmp.find(item => item.title === todo.title)
      if (!findTodo){
        tmp.push(todo)
      }else{
        alert('Такая задача уже существует.')
      }
      return tmp
    })
  }
  const change = (todo) => {
    let tmp = [...todos]
    let _todo = tmp.find(item => item.title === todo.title)
    _todo.checked = todo.checked
    setTodos(tmp)
  }
  const remove = (todo) => {
    let tmp = [...todos]
    let _todo = tmp.filter(item => item.title !== todo.title)
    setTodos(_todo)
  }

  return ( 
  <div className='wrapper'>
    <Header/>
    <Imput 
      addTodo={addTodo}
    />
    <Todos
      todos={todos}
      change={change}
      remove={remove}
    />
  </div>
  );
}

export default App;
