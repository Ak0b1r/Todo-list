import React from 'react'
import NavBar from './components/NavBar'
import Notes from './components/Notes'
import ContextProvider from './context/Context'
import AddNote from './components/AddNote'

function App() {
  return (
    <ContextProvider>
        <NavBar />
        <Notes />
        <AddNote />
    </ContextProvider>
  )
}

export default App