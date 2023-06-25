import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { HeaderPrintComponent } from './components/header/header'
import {BrowserRouter,Routes,Route} from "react-router-dom"
import { HomeComponent } from './pages/Home/home'
import { PeopleComponent } from './pages/People/people'
import { SingleCharacter } from './pages/singleCharacter/singleCharacter'
import { DefaultComponent } from './pages/Default/default'

function App() {
  

  return (
    <>
    <BrowserRouter>
      < HeaderPrintComponent />
      <Routes>

        <Route path='/' element = {<DefaultComponent />}  />

        <Route path='/homePage' element = {<HomeComponent />}/>

        <Route path='/peoplePage' element = {<PeopleComponent />} />

        <Route path='/planetsPage' element = {<p></p>} />

        <Route path='/character/:id' element = { <SingleCharacter />} />

      </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
