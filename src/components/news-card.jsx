import React from 'react'
import Img from '../Assets/Thumbnail.png'
import { tweets } from '../data/tweets'
const NewsCars = (props) => {
  return (
    <div className='news-card'>
                <div className='news-card_info'>
                <div className='card-date'>{props.category}</div>
                <a href ="/" className='card_desc'>{props.desc}</a>
                <div className='card_hash'>
                Trending with <a href='/'>#{props.hash}</a>
                </div>
                </div>
                <div className='card-img'><img className='card-user-img' src={props.img}/></div>
            </div>
  )
}

export default NewsCars