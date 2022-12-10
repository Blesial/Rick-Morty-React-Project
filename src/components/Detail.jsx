import React from "react";
import {useParams, useNavigate} from 'react-router-dom';
import {useState} from 'react'
import {useEffect} from 'react'

function Detail () {
    const navigate = useNavigate()
    const {detailId} = useParams();
    const [character, setCharacter] = useState('');

    useEffect(() => {
        fetch(`https://rickandmortyapi.com/api/character/${detailId}`)
           .then((response) => response.json())
           .then((data) => {
              if (data.name) {
                 setCharacter(data);
              } else {
                 window.alert('No hay personajes con ese ID');
              }
           })
           .catch((err) => {
              window.alert('No hay personajes con ese ID');
           });
     }, [detailId]);

    return(
        <>
        <div style={{
                color:'white',
                fontWeight:'bold',
                fontSize: '50px',
                backgroundColor:'black'
            }}>
            <h1 >{character.name}</h1>
            <h2>Status: {character.status}</h2>
            <h2> {character.type}</h2>
            <h2> Created: {character.created}</h2>

            

        </div>
        <button style={{
            height:'50px',
            width: '60px',
            borderRadius:'4px',
            backgroundColor:'black',
            border: '3px solid black',
            color: 'white',
            padding:'5px'
        }}
        onClick={() => {navigate('/home')}}>VOLVER</button>
        </>

    )
}



export default Detail