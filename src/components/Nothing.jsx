import React from 'react'
import { Link } from 'react-router-dom'

const Nothing = () => {
  return (
    <div className='w-10/12 mx-auto my-0 flex items-center flex-col justify-center min-h-[70vh]'>
      <h1 className='font-bold text-2xl mb-3'>Nothing to show.....</h1>
      <Link to="/">
        <button className='btn btn-sm btn-neutral'>
        Back to Home
        </button>
      </Link>
    </div>
  )
}

export default Nothing