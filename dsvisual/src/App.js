import React from 'react'
import './styles.css'
import Stack from './components/Stack'
import Array from './components/Array'
import BFS from './components/BFS'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import LandingPage from './components/LandingPage'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Zoom from 'react-reveal/Zoom';
import Fade from 'react-reveal/Fade';
import Bounce from 'react-reveal/Bounce';

function App() {

  return (
    <Router>
    <div className="App">
      <Navbar/>
      <Fade>
      <Routes>
      <Route path='/' element={<Home/>}> </Route>
      <Route path='Dslist' element={<LandingPage/>}> </Route>
      <Route path='Stack' element={<Stack/>}></Route>
      <Route path='Array' element={<Array/>}></Route>
      <Route path='BST' element={<BFS/>}></Route>
      </Routes>
      </Fade>
    </div>
    </Router>
  );
}

export default App;
