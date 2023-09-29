import React, { useContext, useState } from 'react'
import {Context} from '../context/Context'
import { FaPen } from 'react-icons/fa'

function AddNote() {

    const {lang,addData,editData,updateData,edit,active,setActive,setEdit} = useContext(Context)

    const [title,setTitle] = useState('')
    const [text,setText] = useState('')

    const addNote = (e)=>{
        e.preventDefault()
        setActive(!active)
        setTitle('')
        setText('')
        setEdit({item:{},edit:false})
    }
    const noteSubmit = (e)=>{
        e.preventDefault()

        if (title.trim() !== '' || text.trim() !== '') {
            const newNote = {
                id:new Date().getTime().toString(),
                title:title,
                text:text,
                date:new Date().toLocaleDateString()
            }
            if (edit.edit) {
                editData(edit.item.id,newNote)
            }else{
                addData(newNote);
            }
        }

        setActive(!active)
        setTitle('')
        setText('')
    }

  return (
    <>
        <div className={`add ${active && 'active'}`}>
        <div className="add__card">
            <form action="" className="add__form" onSubmit={noteSubmit}>
                <h2 className="add__title">{lang.addTitle}</h2>
                <label htmlFor="" className="add__label">
                    {lang.inputTitle}
                    <input 
                        type="text" 
                        placeholder={lang.inputTitle} 
                        className="add__input"
                        value={title}
                        onChange={(e)=>setTitle(e.target.value)}
                    />
                </label>
                <label htmlFor="" className="add__label">
                    {lang.inputText}
                    <input 
                        type="text" 
                        placeholder={lang.inputText} 
                        className="add__input"
                        value={text}
                        onChange={(e)=>setText(e.target.value)}
                    />
                </label>
                <div className="add__btn">
                    <button className="btn btn-danger" onClick={addNote}>{lang.cancel}</button>
                    <button className="btn btn-secondary" type='submit'>{edit.edit ? lang.edit : lang.add}</button>
                </div>
            </form>
        </div>
    </div>
    <button className='btn btn-primary add__open' onClick={addNote}><FaPen /></button>
    </>
  )
}

export default AddNote