import { useState } from 'react'
import { RouterProvider } from "react-router-dom";
import Rutas from './rutas.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
       <RouterProvider router={Rutas} />       
    </>
  )
}

export default App
