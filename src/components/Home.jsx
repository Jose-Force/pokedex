import React from 'react';
import {useEffect } from 'react';
import {useDispatch, useSelector} from 'react-redux';
import { getPokemons} from '../actions';
import Card from './Card';

export default function Home (){
  const dispatch = useDispatch();
  const allPokemons = useSelector((state) => state.pokemon)
  
  useEffect(()=>{
    dispatch(getPokemons())
  },[dispatch]) 

  return (
    <div>
      {allPokemons.map( e=>{
        return(
          <div key={e.id}>
              <Card name = {e.name} img={e.img} types1 = {e.types[0]} types2 = {e.types[1]} />
          </div>
      )
      }) } 
    </div>
  )
}