import { FETCH_WEATHER } from '../actions/index';


export default function(state=[], action) {
  switch(action.type) {
    case FETCH_WEATHER:
      // DO NOT PUSH - we NEVER want to manipulate the original state array;
      //rather, here we return a NEW array that replaces the current state;
      //in pure ES6, we could use [action.payload.data, ...state]
      return state.concat([action.payload.data]);
  }
  return state;
}