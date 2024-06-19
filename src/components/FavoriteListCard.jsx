import React from 'react'
import news404 from "../assets/images/news404.jpeg"
import { Link } from 'react-router-dom'

const FavoriteListCard = ({item}) => {
  return (
<div className="card bg-base-100 shadow-xl">
  <figure><img className='h-[200px] w-full' src={item?.urlToImage || news404} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{item?.title === "[Removed]" ? "There is no title from API" : item?.title}</h2>
    <Link to={`/technologyNewsDetails/${item?.author}`}>
    <p className='text-sm mb-5 hover:underline cursor-pointer'>{item?.description === "[Removed]" ? "There is no description from API" : item?.description}</p>
    </Link>
  </div>
</div>
  )
}

export default FavoriteListCard
