import React from 'react'
import Footer from './components/footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'

function App() {
  return (
    <>
    <NavBar/>
    <ItemListContainer greeting={"Los mejores celulares al mejor precio"}/>
    <ItemListContainer greeting={"En preparacion"}/>
    <Footer/>
    </>
  )
}

export default App
