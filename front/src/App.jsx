import { useEffect, useState } from 'react'
import Logo from './components/icons/Logo'
import Taks from './components/Taks'
import ModalTask from './components/ModalTask'
import '@fontsource-variable/outfit';
import './App.css'

function App() {
  const [taks, setTaks] = useState([])
  const [showModal, setShowModal] = useState(true)
  const [stateForm, setStateForm] = useState('none')

  useEffect(()=>{
    const getAllTaks = async () => {
      try {
        await fetch('http://localhost:3000/api/taks').then(res => res.json()).then(res => setTaks(res))
      } catch(e) {
        console.error(e)
      }
    }
    getAllTaks()
  },[])

  return (
    <>
    <main>
      <div className="main-header">
        <div className="logo">
         <Logo></Logo>
        </div>
        <div className="info">
          <h1 className='board-title'>My Taks Board</h1>
          <p className="decription-board">Tasks to keep organised</p>
        </div>
        <button className='edit-board-title'><img src="/icons/Edit_duotone.svg" alt="" /></button>
      </div>
      <section className='taks'>
          {
            taks.map(item => (
              <Taks key={crypto.randomUUID()} icon={item.icon} title={item.title} description={item.description} state={item.state}></Taks>
            ))
          }
      </section>
          <section className="add-task">
            <button className="addTask"><img src="/icons/Add_round_duotone.svg" alt="icon" /></button>
            <h2>Add new task</h2>
          </section>
    </main>
    {
      showModal ? <ModalTask></ModalTask>: ''
    }
    </>
  )
}

export default App
