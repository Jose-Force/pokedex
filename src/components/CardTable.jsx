import React from "react";
import styles from '../styles/Card.module.css'

export default function CardTable({allPokemons, openDetail}){
  
  return(
    <div>
      <table className={styles.tableContainer}>
        <tbody>
          <tr className={styles.tableTitle}>
            <td># Id</td>
            <td >Name</td>
            <td>Weight (kg)</td>
            <td>Height (m)</td>
          </tr>
          {
            allPokemons.map(e =>{
              return(
                 <tr key= {e.id} className={styles.tableTr} onClick={()=> openDetail(e.id)}>
                  <td>{e.id}</td>
                  <td>{e.name}</td>
                  <td>{e.weight / 10}</td>
                  <td>{e.height}</td>
                </tr>
              )
            })
          }
          </tbody>
      </table>
    </div>
  )
}
