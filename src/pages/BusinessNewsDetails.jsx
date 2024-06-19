import React from 'react'
import { Link, useLoaderData, useParams } from 'react-router-dom';

const BusinessNewsDetails = () => {

    const businessData = useLoaderData();
    const businessArticles = businessData?.articles;
    const {author} = useParams();

    const businessAuthorNews = businessArticles?.find(data => data.author === author);
    console.log(businessAuthorNews)

  return (
    <div className='min-h-[70vh] flex items-center justify-center'>
    <div>
        <div className='w-7/12 mx-auto my-0'>
            <div className='flex items-center justify-center mb-5'>
        <span className='text-center border-y-2 border-y-gray-400'>{businessAuthorNews?.author}</span>
        </div>
      <h1 className='text-3xl font-bold text-center'>{businessAuthorNews?.title}</h1>
      
      </div>
        <div className='w-7/12 mx-auto text-left my-10'>
            {businessAuthorNews?.content}
        </div>
        <div className='flex items-center justify-center'>
        <Link target='_blank' to={`${businessAuthorNews?.url}`}>
        <button className='btn btn-sm btn-neutral'>
            Read More
        </button>
        </Link>
        </div>
    </div>
    </div>
  )
}

export default BusinessNewsDetails
