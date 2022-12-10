import { ADD_CHARACTER } from "./types";
import { DELETE_CHARACTER } from "./types";

const initialState = {
    myFavorites: [],
    allCharacters: []
};

const rootReducer = (state = initialState, {type, payload}) => {
    switch (type) {
        case ADD_CHARACTER:
            return {
                ...state,
                myFavorites: [...state.allCharacters, payload],
                allCharacters: [...state.allCharacters, payload]
                
            }
        case DELETE_CHARACTER:
            const filteredArray = state.myFavorites.filter(e => e.id !== payload)
            return {
                myFavorites: filteredArray
            }
        case 'FILTER':
        const filteredChar = state.allCharacters.filter(e => e.gender === payload)
            return {
                ...state,
                myFavorites: filteredChar
            }
        
        case 'ORDER':
        const orderAscendente = state.allCharacters.sort((a, b) => {
          
            if (payload === 'Ascendente') {  return a.id - b.id }
            else {
               return  b.id - a.id
            }
        });
           
          return {
                ...state,
                myFavorites: orderAscendente

            }
        default:
            return {
                ...state
            }
    }
}

export default rootReducer