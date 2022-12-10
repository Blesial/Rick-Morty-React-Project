import React from "react";
import { useNavigate } from "react-router-dom";

function About () {

    const navigate = useNavigate()

    return(
        <>
        <div style={{
            color: 'green',
            fontSize: '40px',
            backgroundColor: 'black',
            height: '450px',
            width: '100%',
            fontWeight: 'bold'
          }}>By Ignacio Quirelli.
          <br>
          </br> 
          App creada con React
          <br>
          </br>
          LE FALTA EL CSS A TODO </div>
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



export default About