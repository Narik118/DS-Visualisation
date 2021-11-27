import React from 'react'
import './styles.css'
import Stack from './components/Stack'
import Array from './components/Array'
import BST from './components/BST'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

function App() {
  return (
    <Router>
    <div className="App">
      <Routes>
      <Route path='Stack' element={<Stack/>}></Route>
      <Route path='Array' element={<Array/>}></Route>
      <Route path='BST' element={<BST/>}></Route>
      </Routes>
    </div>
    </Router>
  );
}

export default App;
