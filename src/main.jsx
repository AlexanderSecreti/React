import React from 'react'
import ReactDOM from 'react-dom/client'
<<<<<<< HEAD
=======
import { BrowserRouter } from 'react-router-dom'
>>>>>>> 6e52f46 (PreEntrega2+Secreti)
import App from './App'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
<<<<<<< HEAD
    <App />
=======
  <React.StrictMode>
    <BrowserRouter>
      <App id='principal' />
    </BrowserRouter>
  </React.StrictMode>
>>>>>>> 6e52f46 (PreEntrega2+Secreti)
)
