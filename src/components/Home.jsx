import React from 'react';
import {useState, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons} from '../actions';
import CardGalery from './CardGalery';
import CardTable from './CardTable';
import CardList from './CardList';
import styles from '../styles/Home.module.css'

export default function Home (){
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemon)
  let [viewType, setViewType] = useState("Galery")

  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch]) 

  function handleClick(e){
    e.preventDefault();
    setViewType(e.target.value)
  }

  return (
    <div className={styles.container}>
      <div className={styles.nav}>
        <p>Pokedex</p>
        <div>
          <h6>Select view type</h6>
          <div className={styles.buttonsContainer}>
            <button value='List' onClick={(e)=>handleClick(e)}>Lista</button>
            <button value='Galery' onClick={(e)=>handleClick(e)}>Galeria</button>
            <button value='Table' onClick={(e)=>handleClick(e)}>Tabla</button>
          </div>
        </div>
      </div>
  
      {
        viewType ==='Table' ? <div className= {styles.tableContainer}><CardTable allPokemons = {allPokemons}/></div> :
        viewType === 'List' ? <div  className= {styles.tableContainer}><CardList allPokemons = {allPokemons}/></div> :
        <div className= {styles.cardContainer}>
        {allPokemons.map( e=>{
          return(
            <div key={e.id}>
              <CardGalery name = {e.name} img={e.img} types1 = {e.types[0]} types2 = {e.types[1]} />
            </div>
        )
        }) } 
        </div>
      }

      
    </div>
  )
}