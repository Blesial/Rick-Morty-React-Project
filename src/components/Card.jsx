import {Link} from 'react-router-dom';
import { connect } from 'react-redux';
import { addCharacter } from "../redux/actions";
import { deleteCharacter } from "../redux/actions";
import { useState, useEffect } from "react";
import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'


function Card(props) {
   const [isFav, setIsFav] = useState (false);

   useEffect(() => {
      props.myFavorites.forEach((fav) => {
         if (fav.id === props.id) {
            setIsFav(true);
         }
      });
   }, [props.myFavorites, props.id]);

   const handleFavorite = () => {
      if (isFav === true) {
         setIsFav(false);
         props.deleteCharacter(props.id)
      }
      else {
         setIsFav(true);
         props.addCharacter(props)
      }
   }

   return (
     
      <div className='card text-center bg-black'>
       <button className='btn btn-outline-dark' onClick={() => {props.onClose(props.id)}}>X</button>

       <img src={props.image} alt={props.name} />
         <div className="card-body text-white">
         <h2 className="card-title">{props.name}</h2>
         <div className="card-text text-secondary">
         <p>{props.species}</p>
         <p>{props.gender}</p>
         </div>
         { isFav ? (
            <button onClick={handleFavorite}> ❤️ </button>
         ) : (
            <button onClick={handleFavorite}>🤍</button>
         )}
         <Link to={`/detail/${props.id}`}>
       <button className='btn btn-outline-dark'>DETAIL</button>
         </Link>

         </div>
         </div>
   );
}

export function mapStateToProps (state) {
   return {
      myFavorites: state.myFavorites
   }
}


export function mapDispatchToProps (dispatch) {
   return {
      addCharacter: function (character) {
         dispatch(addCharacter(character))
      },
      deleteCharacter: function (id) {
         dispatch(deleteCharacter(id))
      }
   }
}

export default connect (mapStateToProps, mapDispatchToProps)(Card)