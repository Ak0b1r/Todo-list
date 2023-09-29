import React, { useContext } from 'react'
import {FaPencilAlt,FaTrashAlt} from 'react-icons/fa'
import { Context } from '../context/Context'
function Note({note}) {
    const {lang,delData,updateData} = useContext(Context)
  return (
    <div className='note'>
        <div className="note__info">
            <h3 className="note__title">{note.title}</h3>
            <p className="note__date">{note.date}</p>
        </div>
        <p className="note__text">{note.text}</p>
        <div className="note__btn">
            <button className="btn btn-secondary" onClick={()=>updateData(note)}>
                <FaPencilAlt />
                <span>{lang.edit}</span>
            </button>
            <button className="btn btn-danger" onClick={()=>delData(note.id)}>
                <FaTrashAlt />
                <span>{lang.del}</span>
            </button>
        </div>
    </div>
  )
}

export default Note