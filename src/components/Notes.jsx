import React, { useContext, useState } from 'react'
import {BiTable} from 'react-icons/bi'
import {FaList} from 'react-icons/fa'
import Note from './Note'
import { Context } from '../context/Context'

function Notes() {
    const {lang,value,notes} = useContext(Context)
    const [active,setActive] = useState(true)

  return (
    <div className='container'>
        <div className="notes__top">
            <h2 className="notes__title">{lang.all}</h2>
            <button className="btn btn-primary" onClick={()=>setActive(!active)}>
                {
                    active ? 
                    <>
                        <BiTable />
                        <span>{lang.table}</span>
                    </>
                    :
                    <>
                        <FaList />
                        <span>{lang.list}</span>
                    </>
                }
                
            </button>
        </div>
        <div className={`notes ${!active && 'active'}`}>
            {
                notes.filter((note)=>{
                    if (value.trim() === '') {
                        return note
                    }else if (note.title.toString().toLowerCase().includes(value.toLowerCase())) {
                        return note
                    }
                }).map((note)=>(
                    <Note note={note} key={note.id} />
                ))
            }
        </div>
    </div>
  )
}

export default Notes