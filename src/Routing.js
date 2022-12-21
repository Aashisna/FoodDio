import React, { useState } from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Explorefood from './Explorefood'
import Footer from './Footer'
import Header from './Header'
import Landing from './Landing'
import Todo from './Todo'

export default function Routing() {
    const[filter,setFilter]=useState("")
  return (
    <div>
        <BrowserRouter>
     <Header setFilter={setFilter}/>
     <Routes>
     <Route path="/" element={<Landing filter={filter} />}/>
     <Route path="/todo" element={<Todo />} />
     <Route path="/explore" element={<Explorefood />} />
     <Route path="/review" element={<Todo />} />
       {/* <Todo/>
       <Landing/> */}
  </Routes>
  <Footer/>
  </BrowserRouter>
    </div>
  )
}
