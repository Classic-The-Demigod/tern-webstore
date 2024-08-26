import React from 'react'
import { Link } from 'react-router-dom';

function Page404() {
  return (
      <div className='w-[80%] my-10 mx-auto flex flex-col items-center'>
          
          <h1 className='text-5xl font-primary animate-rainbow  my-[10rem]'>Page Not Found !</h1>
          <Link to={"/"} className='text-xl'>Go Back Home</Link>
    </div>
  )
}

export default Page404;