import React from "react";

export default function Card({name, img, types1,types2}){
  return(
      <div>
        <div>
          <h1>{name}</h1>
        </div>
        <div >
        <img src={img} alt='Img No Fount' />
        </div>
        <div >
            <div >
              <div>{types1}</div>
            </div>
            <div >
              <div>{types2}</div>
            </div>
        </div>
      </div>
  )
}