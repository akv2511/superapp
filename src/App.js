import React from 'react'
import {Routes, Route} from 'react-router-dom';
import Home from './navigation/Home'
import CATAGORY from './navigation/Choose_Category';
import DataEvents from './navigation/DataEvents'
import Movies from './navigation/Movies'
function App() {
  return (
    <>
    <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path="/Choose_Category" element={<CATAGORY/>}/>
        <Route path="/DataEvents" element={<DataEvents/>}/>
        <Route path="/Movies" element={<Movies/>}/>
        
    </Routes>
    </>
  );
}
export default App;
