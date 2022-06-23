import React from "react";
import styles from '../styles/Card.module.css'

export default function CardList({allPokemons}){

  return(
    <div>
      {
        allPokemons.map(e =>{
          return(
            <div className={styles.containerList}>
              <li>
                <div className={styles.listName}><div>#{e.id}</div><div>{e.name}</div></div>
                <ol>
                  <li className={styles.listName}>
                    <div >Types: {e.types[0]} { e.types[1] ? `and ${e.types[1]}` : null}</div>
                    <div>Height: {e.height} m</div>
                    <div>Weight: {e.weight/10} kg</div>
                  </li>
                </ol>
              </li>
            </div>
          )
        })
      }
    </div>
  )
}
