import { useEffect } from 'react'
import './App.css'

function App() {
  useEffect(()=>{
    async function fetchData() {
      await fetch('http://localhost:3000/api/taks').then(res => res.json()).then(res => console.log(res))
    }
    fetchData()
  },[])
  return (
    <>
      <h1>Hello world</h1>
    </>
  )
}

export default App
