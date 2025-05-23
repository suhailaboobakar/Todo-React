import { useState } from "react";
import "../todo.css";
import { FaPencilAlt } from "react-icons/fa";

const Todo = () => {
  const [todo, setTodo] = useState([]);
  const [input, setInput] = useState("");
  const [edit, setEdit] = useState(false);
  const [newInput, setNewInput] = useState([]);
  const [currentId , setCurrentId] = useState(null)

  const addTodo = () => {
    if (input.trim() === "") return;
    setTodo((todo) => {
      return todo.concat({
        text: input,
        id: Math.random() * 50 + 1,
      });
    });
    setInput("");
  };

  const remove = (id) => {
    setTodo((todo) => todo.filter((t) => t.id != id));
  };


  const openPopup = (id) => {
      setEdit(true)
      const selectedTodo = todo.find((t)=> t.id===id)
      const val = selectedTodo.text
      setNewInput(val)
      setCurrentId(id)
  }

  const handleEdit = () => {
    setTodo((prev)=>
      prev.map((t)=>
         t.id === currentId ? {text:newInput} : t
    )
  )
  setEdit(false)
  setNewInput("")
  setCurrentId(null)
  }

  // const handleEdit = () => {
  //     setInput((prevInput)=>[
  //       ...prevInput,
  //       {
  //           text: newInput
  //       }
  //     ]
  //     )
  // }

  return (
    <div className="conatiner">
           {
      edit ? (
        <>
        <input className="input" value={newInput} onChange={(e)=> setNewInput(e.target.value)}></input>
        <button onClick={handleEdit}>Save</button>
        </>
      ) : (
        <>
      <input
        className="input"
        type="text"
        placeholder="New Todo"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            addTodo();
          }
        }}
      ></input>
      <button onClick={addTodo}>Add</button>
      </>
      )
    }
    <ul className="todo-list">
        {todo.map(({ text, id }) => {
          return (
            <li key={id} className="todo">
              <span>{text}</span>
              <button className="close" onClick={() => remove(id)}>
                X
              </button>
              <button onClick={()=>openPopup(id)}><FaPencilAlt /></button>
            </li>
          );
        })}
      </ul>
    </div>
  )
    
};

export default Todo;
