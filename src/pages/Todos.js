import React, {useState} from 'react'

export default function Todos() {
    const [inputText, setInputText] = useState("");
    const [todos, setTodos] = useState([ 
      {id:1, todo: "membuat todos", isDone:false},
      {id:2, todo: "belajar state", isDone:false},
      {id:3, todo: "tes todos", isDone:false},
      {id:4, todo: "belajar react", isDone:false}, 
    ])
  
    // Menangani perubahan pada text input
    const handleChange = (event) => {
      setInputText(event.target.value)
    }
  
    // Menambahkan todo
    const addTodo = (event) => {
  
      // button di dlm form akan melakukan refresh
      // kasih prevent default biar ga nge refresh
      event.preventDefault()
  
      let newTodo = {
        id: 1,
        todo: inputText 
      }
  
      if (todos.length > 0) {
        newTodo.id = todos[todos.length-1].id + 1
      }
  
      setTodos([...todos, newTodo])
      setInputText("")
    }
  
    // Menghapus todo
    const deleteTodo = (itemDel) => {
      let newTodos = todos.filter((item) => (item.id !== itemDel.id))
  
      setTodos(newTodos)
      console.log(newTodos)
    }
  
    const handleCheckboxClick = (itemCheck) => {
        itemCheck.isDone = !itemCheck.isDone
        let todoIsDone = [...todos]

        setTodos(todoIsDone)
        console.log(todoIsDone)
    }

  
    return (
      <div>
        <h1>TODO APP</h1>
  
        <form>
          <input type="text" onChange={handleChange} value={inputText} />
          <button onClick={addTodo}>ADD</button>
        </form>
  
        <ul>
          {todos.map((item) => (
            <div key={item.id}>
                <input type="checkbox" onChange={() => handleCheckboxClick(item)} />
              <li style={{display: "inline"}}>{item.todo}</li>
              <button onClick={() => {deleteTodo(item)}}>x</button>
            </div>
          ))}
        </ul>
      </div>
    );
}
