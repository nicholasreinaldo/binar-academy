import { useState } from 'react'
import './App.css'

function App() {
  const [foods, setFoods] = useState(['Apple', 'Orange', 'Banana'])

  function handleAddFood() {
    const newFood = document.getElementById('foodInput').value
    document.getElementById('foodInput').value = ''
    setFoods((f) => [...f, newFood])
  }

  return (
    <div>
      <input type="text" id="foodInput" placeholder="Enter first name" />
      <button onClick={handleAddFood}>Add Food</button>

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
