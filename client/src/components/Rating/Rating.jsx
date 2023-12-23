import React from 'react'
import staricon from './star-symbol.svg'
import './Rating.css'

const Rating = ( { rating } ) => {
    // let array = Array(Math.floor(Number(rating)))
    // console.log(array)
  return (
    <>
        <div className="ratingcontent">
        {
            [...Array(Math.floor(Number(rating)))].map((element)=>(
                <img src={staricon} alt="" className="icon" />
            ))
        }
        </div>
    </>
  )
}

export default Rating