import React from "react";
import styles from '../styles/Card.module.css'

export default function CardGalery({name, img, types1,types2}){
  return(
    <div className= {styles.card}>
    <div className={styles.containerName}>
      <h1 className={styles.cardName}>{name}</h1>
    </div>
    <div className={styles.cardFount}>
    <img className={styles.cardImg} src={img} alt='Img No Fount' />
    </div>
    <div className={styles.cardTypes}>
        <div className={styles.cardTypesh3}>
          <div>{types1}</div>
        </div>
        { types2 ?
        <div className={styles.cardTypesh3}>
          <div>{types2}</div>
          </div>
         : null }
    </div>
  </div>
  )
}