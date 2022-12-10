import React from "react";
import SearchBar from "./SearchBar.jsx";
import {Link} from 'react-router-dom';

export default function Nav ({onSearch, onRandom}) {

return (
    <div style={{
        border: "2px solid transparent",
        backgroundColor: "transparent ",
        marginTop:"0.5px",
        borderRadius: "5px"
    }}>
        <Link to='/home'>HOME</Link>  
        <br>
        </br>
        <Link to='/favorites'>
        <span>FAVORITES</span>
        </Link>
        <br>
        </br>
        <Link to='/about'>
        <span>ABOUT</span>
        </Link>

     <SearchBar onSearch={onSearch}

/>
<button onClick={()=> {
    onRandom();
}} style={{
     border: '1px',
     backgroundColor: "purple",
     borderRadius: '5px',
     fontSize: '16px',
     fontWeight: 'bolder', 
     cursor: 'pointer',
     display: 'flex',
    float: 'right'
}}>Random </button>

</div>

)
}

