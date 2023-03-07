
import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from "axios"
import TherapyList from './components/Terapias/TherapyList'
import { Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import TerapiaItem from './components/TerapiaItem'
import TerapiasManuales from './components/TerapiasManuales'
import TerapiaAparatologia from './components/TerapiaAparatologia'
import TerapiaAparatologiaItem from './components/TerapiaAparatologiaItem'
import TerapiaManualesItem from './components/TerapiasManualesItem'


function App() {
  const [terapias, setTerapias] = useState([])
  
  const getTerapias = async () => {
    const res = await axios.get("https://fakestoreapi.com/products")
    setTerapias(res.data);
  };
  

  useEffect(() => {
    getTerapias();
  },[]);


  return (
    
    <div className='back'>
      <Navbar />;
      <Home  greeting={ "bienvenidos a consultorio consciencia"}/>;
      <Routes>
        <Route path='/' element={<Home/>}/>        
        <Route path='/terapias' element={<TherapyList terapias={terapias }/>}/>
        <Route path='/terapias/:id' element={<TerapiaItem terapias={terapias }/>} />
        <Route path='/terapiasmanuales' element={<TerapiasManuales terapias={terapias}/>} />
        <Route path='/terapiasmanuales/:id' element={<TerapiaManualesItem terapias={terapias}/>} />
        <Route path='/terapiaAparatologia' element={<TerapiaAparatologia terapias={terapias}/>} />
        <Route path='/terapiaAparatologia/:id' element={<TerapiaAparatologiaItem terapias={terapias}/>} />
        <Route path='*' element={<h2>Error 404</h2>} />
      </Routes>
      
    </div>
  )
}

export default App
