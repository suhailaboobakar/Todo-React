import { useState } from 'react'
import "../todo.css"

const Todo = () => {
    const [todo , setTodo] = useState([])
    const [input , setInput] = useState('')

    const addTodo = () => {

        if(input.trim() ==="") return;
        setTodo((todo)=>{
            return todo.concat({
                text : input,
                id : (Math.random()*50)+1
            })
        })
        setInput("")
    }

    const remove = (id) => {
        setTodo((todo)=> todo.filter((t)=> t.id != id))
    }
  return (
    <div className="container">
      <input className="input" type="text" placeholder="New Todo" value={input} onChange={(e)=> setInput(e.target.value)} onKeyDown={(e)=>{
        if(e.key ==="Enter"){
            addTodo();
        }
      }}></input>
      <button onClick={addTodo}>Add</button>
      <ul className="todo-list">
        {
            todo.map(({text , id})=>{
                return (
                    <li key={id} className="todo">
                        <span>{text}</span>
                        <button className="close" onClick={()=>remove(id)}>X</button>
                    </li> 
                )
            })
        }
      </ul>
    </div>
  )
}

export default Todo
