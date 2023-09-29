import React, {createContext,useEffect,useState} from 'react'
import {uz,ru} from '../language'

export const Context = createContext()

function ContextProvider({children}) {


  const getStorage = ()=>{
    let notes = localStorage.getItem("notes")
    if (notes) {
      return notes = JSON.parse(localStorage.getItem("notes")) 
    }else{
      return []
    }
  }


    const [notes,setNotes] = useState(getStorage)
    const [value,setValue] = useState('')
    const [lang,setLang] = useState(uz)
    const [flag,setFlag] = useState(true)
    const [active,setActive] = useState(false)
    const [edit,setEdit] = useState({item:{},edit:false})
    function changeLang(til) {
        til === 'ru' ? setLang(ru) : setLang(uz)
        setFlag(!flag)
    }

    useEffect(()=>{
      localStorage.setItem("notes",JSON.stringify(notes))
    },[notes])

    const addData = (newNote)=>{
      setNotes([newNote,...notes])
    }
    const delData = (id)=>{
      setNotes(notes.filter((item)=> item.id !== id))
    }
    const editData = (id,update)=>{
      setNotes(notes.map(item => item.id === id ? update : item))
      setEdit({
        item:{},
        edit:false
      })
    }
    const updateData = (item)=>{
      setActive(!active)
      setEdit({
        item,
        edit:true
      })
    }


  return (
    <Context.Provider value={{
        lang,flag,changeLang,value,setValue,notes,addData,delData,editData,updateData,edit,active,setActive,setEdit
    }}>
        {children}
    </Context.Provider>
  )
}

export default ContextProvider