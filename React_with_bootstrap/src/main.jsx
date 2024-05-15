import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Header from './Components/header/Header.jsx'
import Buttons from './Components/buttons/Buttons.jsx'
import Loading from './Components/loading/Loading.jsx'
import Error from './Components/Error.jsx'

import 'bootstrap/dist/css/bootstrap.min.css';




ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <>
    <Header/>
    <Buttons/>
    <Loading/>
    <Error/>
    </>
  </React.StrictMode>,
)
