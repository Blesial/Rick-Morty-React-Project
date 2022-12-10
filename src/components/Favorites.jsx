import {connect} from "react-redux";
import React from "react";
import Card from "./Card";
import 'bootstrap/dist/css/bootstrap.min.css'

import { useDispatch } from "react-redux";
import { orderCards, filterCards} from "../redux/actions";


function Favorites ({myFavorites}) {
const dispatch = useDispatch();

function handleOrder (e) {
  dispatch(orderCards(e.target.value))
}
    return (
      <React.Fragment>
        <div>
          <select name="order" onChange={handleOrder}>
          <option value='Ascendente'>Ascendente</option>
          <option value='Descendente'>Descendente</option>
          </select>
        <div>
          <select name="filter" onChange={(e) => {dispatch(filterCards(e.target.value))}}>
          <option value='Male'>Male</option>
          <option value='Female'>Female</option>
          <option value='Genderless'>Genderless</option>
          <option value='unknown'>unknown</option>
          </select>
        </div>

        </div>
        <div className="d-flex flex-direction-right justify-content-center col-md-5">
       { myFavorites && myFavorites.map(e => <div>
               <Card key={e.id} name={e.name}
               id={e.id}
               species={e.species} gender={e.gender} image={e.image}/>
            </div>
            )
       } 
       </div>
     </React.Fragment> 
    )
}

export function mapStateToProps (state) {
   return {
     myFavorites: state.myFavorites
   } 
}

export default connect(mapStateToProps)(Favorites)