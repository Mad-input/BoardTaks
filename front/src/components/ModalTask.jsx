import { useState } from "react"

export default function ModalTask({data,show, render}) {
    const icons = ['/icons/clock-svgrepo-com.svg','/icons/bee-svgrepo-com.svg','/icons/coffee-svgrepo-com.svg','/icons/books-book-svgrepo-com.svg','/icons/computer.svg', '/icons/dialog-2-svgrepo-com.svg']
    const [seledtedIcon, SetSelectedIcon] = useState(data.icon)
    const [taksState, setTaksState] = useState(data.state)
    const changeIconBtn = (val)=> {
        SetSelectedIcon(val)
    }
    const chnageState = (state)=> {
        setTaksState(state)

    }

    const deleteTaks = async ()=> {
        try {
            await fetch(`http://localhost:3000/api/taks/delete/${data.id}`,
                {
                    method: 'DELETE'
                }
            )
            await render()
        }
        catch(e) {
            console.error(e)
        }
    }
  return (
    <>
        <div className="placeholder"></div>
        <form className="modal-task" onSubmit={(e)=> {
            e.preventDefault()
        }}>
            <div className="header-form">
                <h2 className="modal-title">Taks details</h2>
                <button className="close-modal" onClick={() => show()} type="button"><img src="/icons/close_ring_duotone-1.svg" alt=""/></button>
            </div>
            <div className="inputs">
                <label>
                    <span>Task Name</span>
                    <input type="text" id="titleTask" placeholder="Enter a title" defaultValue={data.title}/>
                </label>
                <label>
                    <span>Description Task</span>
                    <textarea id="description-task" cols="30" rows="10" placeholder="Enter a short description" defaultValue={data.description}></textarea>
                </label>
            </div>
            <div className="Seticons">
                <h4>Icon</h4>
                {
                    icons.map((val,i)=> (
                        <button 
                        key={i} 
                        className={`icon-form ${+seledtedIcon === i+1 ? 'active' : ''}`}
                        id={i} 
                        onClick={()=> changeIconBtn(i+1)}>
                            <img src={val} 
                            alt="icon" width={30}/>
                        </button>
                    ))
                }
            </div>
            <div className="setStates">
                <h4>State</h4>
                <div className="btns">
                    <button id="in-progress" className={taksState === 'in-progress' ? 'active' : ''} onClick={()=> chnageState('in-progress')}>
                        <div className="content">
                            <div className="tag progress"> <img src="/icons/Time_atack_duotone.svg" alt="icon" /></div>
                            <span>In Progress</span>
                        <div className="check">
                            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="9.99998" r="6.66667" fill="currentColor"/>
                                <path d="M7.08333 9.16667L8.87623 10.9596C9.26675 11.3501 9.89992 11.3501 10.2904 10.9596L16.25 5" stroke="#F8FAFC" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        </div>
                    </button>
                    <button id="completed" className={taksState === 'completed' ? 'active' : ''} onClick={()=> chnageState('completed')}>
                        <div className="content">
                            <div className="tag completed"> <img src="/icons/Done_round.svg" alt="icon" /></div>
                            <span>Completed</span>
                            <div className="check">
                            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="9.99998" r="6.66667" fill="currentColor"/>
                                <path d="M7.08333 9.16667L8.87623 10.9596C9.26675 11.3501 9.89992 11.3501 10.2904 10.9596L16.25 5" stroke="#F8FAFC" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                            </div>
                        </div>
                    </button>
                    <button id="not-do" className={taksState === 'not-do' ? 'active' : ''} onClick={()=> chnageState('not-do')}>
                        <div className="content">
                            <div className={`tag not-do`}> <img src="/icons/close_ring_duotone.svg" alt="icon" /></div>
                            <span>Won`t Not Do</span>
                        <div className="check">
                            <svg width="30" height="30" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <circle cx="10" cy="9.99998" r="6.66667" fill="currentColor"/>
                                <path d="M7.08333 9.16667L8.87623 10.9596C9.26675 11.3501 9.89992 11.3501 10.2904 10.9596L16.25 5" stroke="#F8FAFC" strokeWidth="1.2" strokeLinecap="round"/>
                            </svg>
                        </div>
                        </div>
                    </button>
                </div>
            </div>
            <div className="save-delete">
                <button id="btnDelete" onClick={() => deleteTaks()} type="button">
                    <span>Delete</span> 
                    <img src="/icons/Trash.svg" alt="icon"/>
                </button>
                <button id="btnSave" >
                    <span>Save</span> 
                    <img src="/icons/Done_round.svg" alt="icon" />
                </button>
            </div>
        </form>
    </>
  )
}
