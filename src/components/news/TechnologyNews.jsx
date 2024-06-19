import React from 'react'
import news404 from "../../assets/images/news404.jpeg"
import { Link } from 'react-router-dom'
import { GiSelfLove } from 'react-icons/gi'
import { savedNews } from '../../hooks/addFavorites'

const TechnologyNews = ({news}) => {

    const handleFavoriteNews = (data) => {
        savedNews(data);
    }

  return (
<div className="card bg-base-100 shadow-xl">
  <figure><img className='h-[200px] w-full' src={news?.urlToImage || news404} alt="image" /></figure>
  <div className="card-body">
    <h2 className="card-title">{news?.title === "[Removed]" ? "There is no title from API" : news?.title}</h2>
    <Link to={`/technologyNewsDetails/${news?.author}`}>
    <p className='text-sm mb-5 hover:underline cursor-pointer'>{news?.description === "[Removed]" ? "There is no description from API" : news?.description}</p>
    </Link>

    <div>
        <button onClick={() => handleFavoriteNews(news)} className='btn btn-sm rounded-full btn-neutral'>
        <GiSelfLove />
        </button>
    </div>
  </div>
</div>
  )
}

export default TechnologyNews
