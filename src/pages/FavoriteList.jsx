import React, { useEffect, useState } from 'react'
import { getFavoriteNews } from '../hooks/addFavorites';
import FavoriteListCard from '../components/FavoriteListCard';
import Nothing from '../components/Nothing';

const FavoriteList = () => {

    const [news, setNews] = useState([]);
    console.log(news)

    useEffect(() => {
        const storedNews = getFavoriteNews();
        setNews(storedNews);
    }, [])

    if(news.length === 0) return <Nothing />

  return (
    <div className='w-10/12 mx-auto flex items-center justify-center my-[70px]'>
    <div className='grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 gap-16'>
      {
        news?.map((item, index) => <FavoriteListCard key={index} item={item} />)
      }
    </div>
    </div>
  )
}

export default FavoriteList
