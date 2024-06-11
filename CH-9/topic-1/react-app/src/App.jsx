import { useState } from 'react'
import './App.css'

function App() {
  // const [users, setUsers] = useState([])

  // function handleSubmit() {
  //   const newUser = document.getElementById('userInput').value
  //   document.getElementById('foodInput').value = ''
  //   setFoods((f) => [...f, newUser])
  // }

  return (
    <div>
      <input type="text" id="" placeholder="Enter first name" />
      <button>Add Food</button>
      <h2>List of Food</h2>
      <ul>
        {foods.map((food, index) => (
          <li key={index}>{food}</li>
        ))}
      </ul>
    </div>
  )
}

export default App
