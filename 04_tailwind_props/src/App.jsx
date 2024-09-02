import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-yellow-400 text-black p-4 rounded-md mb-6'>Tailwind CSS</h1>

      <Card username = "Hazique" btnText= "Click Here"/>
      <Card username = "Wasique" />

    </>
  )
}

export default App
