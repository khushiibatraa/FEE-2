import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import Home from './Home';
import Card from './Home';
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Home/> */}
      <h1>App Component</h1>
      <Card>
        <h2>Inside Card</h2>
        <p>This is children props</p>
      </Card>
    </>
    
  )
}

export default App
