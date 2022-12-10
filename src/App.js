import { useEffect, useState } from 'react';
import React from 'react';
import './App.css';
import Cards from './components/Cards.jsx';
import Nav from './components/Nav.jsx';
import About from './components/About';
import Detail from './components/Detail';
import Favorites from './components/Favorites.jsx';
import {Route, Routes, useNavigate} from 'react-router-dom'
import Form from './components/Form';
import { useLocation } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css'

function App () {
  const navigate = useNavigate();
  const [personajes, setPersonajes] = useState([]);
  let location = useLocation();

  const [access, setAccess] = useState(false);

  let username = 'chonaquirelli@gmail.com';
  let password = 'chonita22';
function onRandom() {
  fetch(`https://rickandmortyapi.com/api/character/${Math.floor(Math.random() * 825)}`)
     .then((response) => response.json()) 
     .then((data) => {
           setPersonajes((oldChars) => [...oldChars, data]);
        }
)};

function login (userData) {
  if (userData.password === password && userData.username === username) {
    setAccess(true);
    navigate('/home')
  }
};

useEffect(() => {
  !access && navigate('/');

}, [access, navigate]);


 function onSearch(character) {
  
  const checkArray = obj => obj.id == character;
  
   if (!(personajes.some(checkArray)))  {
  fetch(`https://rickandmortyapi.com/api/character/${character}`)
     .then((response) => response.json()) 
     .then((data) => {
        if (data.name) {
           setPersonajes((oldChars) => [...oldChars, data]);
        } else {
           window.alert('No hay personajes con ese ID');
     }    
     
    })}
  else {return};
};

 function onClose (id) {
  setPersonajes(oldPersonajes => oldPersonajes.filter(element => element.id !== id))
 }
  return (
 

    <div className='App' style={{ padding: '25px' }}>  
<div>
  {location.pathname !== '/' && <Nav onSearch={onSearch} onRandom={onRandom}
     style={{
      display:'flex',
      alignContent: 'end'
    }} 
    />}
</div>

    <Routes>
      <Route path='/' element={<Form login={login}/>}/>
      <Route path='/home' element= {<Cards personajes={personajes} onClose={onClose} />}/>
      <Route path='/favorites' element={<Favorites/>}/>
      <Route path='/detail/:detailId' element={<Detail/>} />
      <Route path='/about' element={<About/>} />
    </Routes>

    </div>

    


  )
}

export default App
