import { useState } from 'react'
import {Routes,Route} from "react-router-dom";
import Header from "./components/Header/Header.jsx"
import Home from "./pages/Home/Home.jsx"
import MovieDetail from './pages/MovieDetail/MovieDetail.jsx';

function App() {
  return (
      <div className="App" style={{backgroundColor:"#303030"}}>
        <Header />
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/movie/:id" element={<MovieDetail/>}/>
        </Routes>
      </div>
      
    
  )
}

export default App
