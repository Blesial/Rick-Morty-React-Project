import React from "react";
import styled from "styled-components";
import { useState } from "react";
const Search = styled.div`
   display: flex;
   justify-content: right;
`;

export default function SearchBar({onSearch}) {
   const [pj, setPj] = useState('');
   return (
      <form onSubmit={(e) => {
      e.preventDefault(); // si no lo pongo me refresca la pagina. evita ese comportamiento por defecto q tienen los formularios.
      onSearch(pj);}}>
      <Search>
     
         <input value={pj} onChange={e => setPj(e.target.value)} type='text' style={{
             width:"5%",
            borderColor: "purple",
            borderRadius: '5px solid',
            backgroundColor: 'transparent',
            color: 'green',
            marginRight: '4px',
         }}/>
      <input type='submit' value='Add'  
      style={{
   border: '1px',
   backgroundColor: "purple",
   borderRadius: '5px',
   fontSize: '16px',
   fontWeight: 'bolder',
   cursor: 'pointer'
   
   
    }}
   />
      </Search>
      </form>

   );
}


