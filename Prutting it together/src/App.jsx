import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import PersonCard from './component/PersonCard'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <PersonCard firstName="Jane" lastName="Doe" age={45} haircolor="Black" />
    <PersonCard firstName="John" lastName="Smith" age={88} haircolor="Brown" />


    </>
  )
}

export default App
