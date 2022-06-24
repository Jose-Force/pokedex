import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getDetail} from "../actions";
import {useParams, useNavigate } from 'react-router-dom';
import styles from '../styles/Detail.module.css'


export default function Details({id, handleClickClose}){
  const allPokemons = useSelector((state)=> state.detail)
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getDetail(id))
  }, [dispatch, id])

  return(
    <div className={styles.detailContainer}>
      {
        allPokemons.length > 0 ? 
          <div className={styles.modal}>
            <div className={styles.containerImg}>
              <div className={styles.features2}>
                <div>#{allPokemons[0].id.length > 3 ? allPokemons[0].id.substring(0, 3) + '...' : allPokemons[0].id }</div>
                <div> {allPokemons[0].name}</div>
              </div>
              <img className={styles.imgDetail} src={allPokemons[0].img} alt='Img not found'/>
    
            </div>

            <div>
              <div className={styles.features}>
                <div>
                  <p className={styles.containerp}>Hp</p>
                  <p className={styles.containerValue}>{allPokemons[0].hp}</p>
                </div>
                <div>
                  <p className={styles.containerp}>Attack</p>
                  <p className={styles.containerValue}>{allPokemons[0].attack}</p>
                </div>
                <div>
                  <p className={styles.containerp}>Defense</p>
                  <p className={styles.containerValue}>{allPokemons[0].defense}</p>
                </div>
                <div>
                  <p className={styles.containerp}>Speed</p>
                  <p className={styles.containerValue}>{allPokemons[0].speed}</p>
                </div>
                <div>
                  <p className={styles.containerp}>Height</p>
                  <p className={styles.containerValue}>{allPokemons[0].height}</p>
                </div>
                <div>
                  <p className={styles.containerp}>Weight</p>
                  <p className={styles.containerValue}>{allPokemons[0].weight}</p>
                </div>
              </div>
              <div className={styles.containertypes}><p>Types</p></div>
              <div className={styles.features}>
                <p className={styles.containerp}>{allPokemons[0].types[0]}</p>
                {allPokemons[0].types[1] ? <p className={styles.containerp}>{allPokemons[0].types[1]}</p> : null}
              </div>
            </div>
            <button className={styles.x} onClick={(e)=>handleClickClose(e)}>x</button>
          </div>  : null
      }
    </div> 
  )
}