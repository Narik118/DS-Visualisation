import React from 'react'
import './styles.css'
import Stack from './components/Stack'
import Array from './components/Array'
import BFS from './components/BFS'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='Home' element={<LandingPage/>}> </Route>
      <Route path='Stack' element={<Stack/>}></Route>
      <Route path='Array' element={<Array/>}></Route>
      <Route path='BST' element={<BFS/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
