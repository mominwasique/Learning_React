import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  let [counter,setCounter] = useState(10)

  const increment = () =>{
    console.log("Value increase", counter );
    // counter++;
    setCounter(counter + 1)

    // Interview question :-
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    // setCounter(prevCounter => prevCounter + 1)
    
  }
  const decrement = () =>{
    console.log("Value decrease", counter );
    // counter--;
    setCounter(counter - 1)

    
    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1)
    // setCounter(prevCounter => prevCounter - 1)
    
  }

  return (
    <>
      <h1>React Project- {counter}</h1>
      <h2>Counter Value: {counter}</h2>

      <button onClick={increment}>Increment {counter}</button>
      
      <button onClick={decrement}>Decrement{counter}</button>
    </>
  )
}2
export default App
