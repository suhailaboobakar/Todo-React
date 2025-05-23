import { useState } from 'react'
import Todo from "./componenets/Todo.jsx"

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Todo />
    </div>
  )
}

export default App
