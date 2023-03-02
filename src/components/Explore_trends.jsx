import React from 'react'
import { Link } from 'react-router-dom'
import {FiMoreHorizontal} from 'react-icons/fi'
const Explore_trends = (props) => {
  return (
    <Link className='trend_card'>
       <div className='card-info'>
       <div className='ternd-category'>
        <p>Trending in {props.category}</p>
       </div>
       <div className='trending-title'>
        <h2>{props.title}</h2>
       </div>
       <div className='ternding-view'>
        <p>{props.view} tweets</p>
       </div>
       </div>
       <div className='more'><FiMoreHorizontal/></div>
    </Link>
  )
}

export default Explore_trends