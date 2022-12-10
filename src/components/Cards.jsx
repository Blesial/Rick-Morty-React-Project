import React from 'react';
import Card from './Card';
import 'bootstrap/dist/css/bootstrap.min.css'



export default function Cards(props) {
   const { personajes, onClose } = props;
   
   return (<div className='container d-flex justify-content-center align-items-center'>
       

         {
         personajes.map(e => 
           <div> <Card 
            key={e.id}
            name={e.name}
            species={e.species} 
            gender={e.gender}
            image= {e.image}
            onClose={onClose}
            id={e.id}
            /> </div>
         )
         }
 </div>);
}

   