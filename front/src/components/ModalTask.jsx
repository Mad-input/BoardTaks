export default function ModalTask() {
    const icons = ['/icons/clock-svgrepo-com.svg','/icons/bee-svgrepo-com.svg','/icons/coffee-svgrepo-com.svg','/icons/books-book-svgrepo-com.svg','/icons/computer.svg', '/icons/dialog-2-svgrepo-com.svg']
  return (
    <>
        <div className="placeholder"></div>
        <form className="modal-task" onSubmit={(e)=> {
            e.preventDefault()
            console.log(Array.from(e.target.elements).filter(el => el.id == 'titleTask'))
        }}>
            <div className="header-form">
                <h2 className="modal-title">Taks details</h2>
                <button className="close-modal"><img src="/icons/close_ring_duotone-1.svg" alt="" /></button>
            </div>
            <div className="inputs">
                <label>
                    <span>Task Name</span>
                    <input type="text" id="titleTask" placeholder="Enter a title"/>
                </label>
                <label>
                    <span>Description Task</span>
                    <textarea id="description-task" cols="30" rows="10" placeholder="Enter a short description"></textarea>
                </label>
            </div>
            <div className="Seticons">
                <h4>Icon</h4>
                {
                    icons.map((val,i)=> (
                        <button key={i} className="icon-form" id={i}><img src={val} alt="icon" width={30}/></button>
                    ))
                }
            </div>
            <div className="setStates">
                <h4>State</h4>
                <div className="btns">
                    <button id="in-progress">
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
                    <button id="completed">
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
                    <button id="not-do">
                        <div className="content">
                            <div className="tag not-do"> <img src="/icons/close_ring_duotone.svg" alt="icon" /></div>
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
                <button id="btnDelete"><span>Delete</span> <img src="/icons/Trash.svg" alt="icon" /></button>
                <button id="btnSave"><span>Save</span> <img src="/icons/Done_round.svg" alt="icon" /></button>
            </div>
        </form>
    </>
  )
}
