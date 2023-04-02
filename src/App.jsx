import './App.css'
import Navbar from './components/Navbar/Navbar'
import { useEffect, useState } from 'react'
import axios from "axios"
import TherapyList from './components/Terapias/TherapyList'
import { Route, Routes, useParams } from 'react-router-dom'
import Home from './components/Home'
import TerapiaItem from './components/TerapiaItem'
import TerapiasManuales from './components/TerapiasManuales'
import TerapiaAparatologia from './components/TerapiaAparatologia'
import TerapiaAparatologiaItem from './components/TerapiaAparatologiaItem'
import TerapiaManualesItem from './components/TerapiasManualesItem'
import Cartwidget from './components/CartWidget/Cartwidget'
import { getDocs, collection, query, where } from "firebase/firestore"
import { db } from './firebase/firebase'
import Rehabilitacion from './components/Rehabilitacion/rehabilitacion'
import RehabilitacionItem from './components/RehabilitacionItem'
import CartProvider from './context/context'
import Cart from './components/Cart/cart'


function App() {
  const [terapias, setTerapias] = useState([]);



  const { id } = useParams();

  useEffect(() => {
    const productoCollection = collection(db, "terapias")
    const categorias = id ? query(productoCollection, where("categoría", "==", id)) : productoCollection;
    getDocs(categorias)
      .then((data) => {
        const list = data.docs.map((products) => {
          return {
            ...products.data(),
            id: products.id,
          };
        });
        setTerapias(list)
      })
      .catch(() => {
        console.log("error al obtener la terapia");
      })

  }, [id]);




  return (
    <CartProvider>
      <div className='back'>
        <Navbar />


        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/terapias' element={<TherapyList terapias={terapias} />} />
          <Route path='/terapias/:id' element={<TerapiaItem terapias={terapias} />} />
          <Route path='/terapias/rehabilitacion' element={<Rehabilitacion terapias={terapias} />} />
          <Route path='/terapias/rehabilitacion/:id' element={<RehabilitacionItem terapias={terapias} />} />
          <Route path='/terapias/terapiasmanuales' element={<TerapiasManuales terapias={terapias} />} />
          <Route path='/terapias/terapiasmanuales/:id' element={<TerapiaManualesItem terapias={terapias} />} />
          <Route path='/terapias/terapiaAparatologia' element={<TerapiaAparatologia terapias={terapias} />} />
          <Route path='/terapias/terapiaAparatologia/:id' element={<TerapiaAparatologiaItem terapias={terapias} />} />
          <Route path='/carrito' element={<Cart terapias={terapias} />} />
          <Route path='*' element={<h2>Error 404</h2>} />
        </Routes>
      </div>
    </CartProvider>
  )
}

export default App
