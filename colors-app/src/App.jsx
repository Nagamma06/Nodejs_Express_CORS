import { useState } from 'react'

import './App.css'


function App() {
const [colors,setColors]=useState();

const getColors=async()=>{
  const response=await fetch('http://localhost:5000/colors')
  const data=await response.json();
  console.log({data});
  setColors(data)
}


return (
  <div className="App">
    <header className="App-header">
      <p>
      Welcome to the <b>colors app! 🌈</b>
    </p>
    <button onClick={getColors}> Get Colors! </button>
    <p>
      {
        colors && JSON.stringify(colors)
      }
    </p>
  </header>
</div>
);
}

export default App;