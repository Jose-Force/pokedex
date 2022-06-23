
const initialState = {
  pokemon : []
}

function pokeReducer (state = initialState, action){

  switch (action.type){ 

    case 'GET_POKEMONS': 
      return { //Carga el estado de todos los pokemon
        ...state,
        pokemon : action.payload,
      }
     
    default : return state;
  }

}

export default pokeReducer;