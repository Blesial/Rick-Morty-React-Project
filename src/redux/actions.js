import { ADD_CHARACTER } from './types';
import { DELETE_CHARACTER } from './types';


export function addCharacter(character) {
    return {
      type: ADD_CHARACTER,
      payload: character,
    };
  }

export function deleteCharacter(id) {
    return {
        type: DELETE_CHARACTER,
        payload: id
    }
}

export function filterCards (gender) {
  return {
    type: 'FILTER',
    payload: gender
  }
}

export function orderCards (id) {
  return {
    type: 'ORDER',
    payload: id
  }
}