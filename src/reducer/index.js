
const initialState = {
  pokemon : [],
  detail: [],
  modal: ''
}

function pokeReducer (state = initialState, action){
  
  switch (action.type){ 

    case 'GET_POKEMONS': 
      return { //Carga el estado de todos los pokemon
        ...state,
        pokemon : action.payload,
      }
    case 'GET_DETAILS':
      return {
          ...state,
          detail : action.payload
      }
    case "SET_MODAL" :
      return{
        ...state,
        modal : action.payload
      }

    default : return state;
  }

}

export default pokeReducer;