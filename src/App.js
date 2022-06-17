import './App.css';

import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";

import NavBar from './components/header/NavBar';
import Header from './components/header/header';
import Business from './components/business/Business';
import Technology from './components/business/Technology';
import People from './components/business/People';
import Innovation from './components/business/Innovation';
import NWorld from './components/business/NWorld';
import Results from './components/business/Results';
import LessIsMore from './components/lessIsMore/LessIsMore';




function App() {
  return (
    <>
    
    
    <NavBar/>
  
      <Routes>
        <Route path='/' element={<Header />} />
        <Route path='business' element={<Business />} />
        <Route path='Technology' element={<Technology />} />
        <Route path='LessIsMore' element={<LessIsMore />} />
        <Route path='People' element={<People />} />
        <Route path='Innovation' element={<Innovation />} />
        <Route path='NWorld' element={<NWorld />} />
        <Route path='Results' element={<Results />} />
      </Routes>
    
</>

  );
}

export default App;
