import axios from "axios";


const getApiInfo = async () =>{
  try {
    const resultUrl = await axios.get('https://pokeapi.co/api/v2/pokemon?limit=150&offset=0');
    const allPokemons = resultUrl.data.results; //Me traigo las url de los 150 pokemons

    const allInfo = await Promise.all(
      allPokemons.map(async e => {
        const poke = await axios.get(e.url)
        //console.log(poke.data) //todas las url de los pokemons donde estan sus datos
         return {
          id : poke.data.id,
          name : poke.data.name,
          hp : poke.data.stats[0].base_stat,
          attack: poke.data.stats[1].base_stat,
          defense: poke.data.stats[2].base_stat,
          speed: poke.data.stats[5].base_stat,
          height: poke.data.height,
          weight: poke.data.weight,
          img : poke.data.sprites.other.dream_world.front_default,
          types : poke.data.types.map(e => e.type.name)
          }
      })
    );
    return allInfo;
  }catch (error) {
    console.log(error);
  }
}

export function getPokemons(){ //se trae todos los pokemon
  return async function(dispatch){
    const allInfo = await getApiInfo()
    return dispatch({
      type: 'GET_POKEMONS',
      payload: allInfo
    })
  } 
}

export const setModal = (modal) =>{
  return{
    type : "SET_MODAL",
    payload : modal
  }
}

export function getDetail(id){
  return async function(dispatch){
    const allInfo = await getApiInfo()
    const pokemonId = allInfo.filter(pokeId => pokeId.id === id);
    return dispatch({
      type: 'GET_DETAILS',
      payload: pokemonId
    })
  }
}


