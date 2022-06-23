import React from "react";
import styles from '../styles/Card.module.css'

export default function CardTable({allPokemons}){

  return(
    <div>
      <table className={styles.tableContainer}>
        <tr className={styles.tableTitle}>
          <td># Id</td>
          <td >Name</td>
          <td>Weight (kg)</td>
          <td>Height (m)</td>
        </tr>
        {
          allPokemons.map(e =>{
            return(
              <tr className={styles.tableTr}>
                <td>{e.id -1}</td>
                <td>{e.name}</td>
                <td>{e.weight / 10}</td>
                <td>{e.height}</td>
              </tr>
            )
          })
        }
      </table>
    </div>
  )
}
