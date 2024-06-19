import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom'

const TechnologyNewsDetails = () => {

    const technologyData = useLoaderData();
    const technologyArticles = technologyData?.articles;
    const {author} = useParams();

    const technologyAuthorNews = technologyArticles?.find(data => data.author === author);
    console.log(technologyAuthorNews)

  return (
    <div className='min-h-[70vh] flex items-center justify-center'>
    <div>
        <div className='w-7/12 mx-auto my-0'>
            <div className='flex items-center justify-center mb-5'>
        <span className='text-center border-y-2 border-y-gray-400'>{technologyAuthorNews?.author}</span>
        </div>
      <h1 className='text-3xl font-bold text-center'>{technologyAuthorNews?.title}</h1>
      
      </div>
        <div className='w-7/12 mx-auto text-left my-10'>
            {technologyAuthorNews?.content}
        </div>
        <div className='flex items-center justify-center'>
        <Link target='_blank' to={`${technologyAuthorNews?.url}`}>
        <button className='btn btn-sm btn-neutral'>
            Read More
        </button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default TechnologyNewsDetails
