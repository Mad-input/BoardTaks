

// eslint-disable-next-line react/prop-types, no-unused-vars
export default function Taks({icon,title,description,state,setShow, setValues, id}) {
    const icons = ['/icons/clock-svgrepo-com.svg','/icons/bee-svgrepo-com.svg','/icons/coffee-svgrepo-com.svg','/icons/books-book-svgrepo-com.svg','/icons/computer.svg', '/icons/dialog-2-svgrepo-com.svg']
    const iconsS = ['/icons/Time_atack_duotone.svg','/icons/close_ring_duotone-1.svg','/icons/Done_round.svg']
    const taskStatus = {
        IDDLE: 'to-do',
        NOTDO: 'not-do',
        COMPLETED: 'completed',
        INPROGRESS: 'in-progress'
    }

    const setIcon = {
        'not-do': 0,
        'completed': 2,
        'in-progress': 0
    }
    const ClassState = ()=> {
        if(taskStatus.NOTDO === state) return taskStatus.NOTDO
        if(taskStatus.INPROGRESS === state) return taskStatus.INPROGRESS
        if(taskStatus.COMPLETED === state) return taskStatus.COMPLETED
        return taskStatus.IDDLE
    }
  return (
    <article className={`taks ${ClassState()}`} onClick={()=> {
        setShow()
        setValues(title,description,icon,state,id)
    } }>
        <div>
        <div className="icon">
            <img src={icons[+icon - 1]} alt="logo" />
        </div>
        <div className="info-taks">
            <h2 className="taks-title">{title}</h2>
            <p className="description-taks">{description === 'some' ? '' : description}</p>
        </div>
        </div>
        {state === taskStatus.IDDLE ? '' : <button className={`state-of-task ${ClassState()}`}> <img src={iconsS[setIcon[state]]} alt="icon" /> </button>}
    </article>
  )
}
