import React from 'react'
<<<<<<< HEAD
import Footer from './components/footer'
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
=======
import ItemListContainer from './components/ItemListContainer'
import NavBar from './components/NavBar'
import Footer from './components/Footer'
import ItemDetailContainer from './components/ItemDetailContainer'
import { Route, Routes } from 'react-router-dom'
import Icon from './components/Icon'

>>>>>>> 6e52f46 (PreEntrega2+Secreti)

function App() {
  return (
    <>
    <NavBar/>
<<<<<<< HEAD
    <ItemListContainer greeting={"Los mejores celulares al mejor precio"}/>
    <ItemListContainer greeting={"En preparacion"}/>
=======
    <Routes>
      <Route path='/DigitalCelu/' element={<ItemListContainer greeting={"Item List Container"}/>} />
      <Route path='/DigitalCelu/category/:id' element={<ItemListContainer greeting={"Item List Container"}/>} />
      <Route path='/DigitalCelu/item/:id' element={<ItemDetailContainer/>} />
    </Routes>
>>>>>>> 6e52f46 (PreEntrega2+Secreti)
    <Footer/>
    </>
  )
}

export default App
