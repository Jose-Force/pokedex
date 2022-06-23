import React from 'react';
import {useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons} from '../actions';
import CardGalery from './CardGalery';
import CardTable from './CardTable';
import CardList from './CardList';
import styles from '../styles/Home.module.css'

export default function Home (){
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemon)
  
  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch]) 

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <p>Pokedex</p>
        <h6>Tipos de vista</h6>
        <div>
          <button>Lista</button>
          <button>Galeria</button>
          <button>Tabla</button>
        </div>
      </div>

      {/* <div className= {styles.tableContainer}><CardTable allPokemons ={allPokemons}/></div> */}
      <div  className= {styles.tableContainer}><CardList allPokemons ={allPokemons}/></div>
      <div className= {styles.cardContainer}>
      {allPokemons.map( e=>{
        return(
          <div key={e.id}>
            {/* <CardGalery name = {e.name} img={e.img} types1 = {e.types[0]} types2 = {e.types[1]} /> */}
          </div>
      )
      }) } 
      </div>
    </div>
  )
}