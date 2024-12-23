import React from 'react'
import foto from "@/assets/images/pageNotFound.avif";

const PageNotFound = () => {
  return (
    <div className='bg-black'>
        <img src={foto} alt="" className='container justify-center h-[500px] w-[800px] py-9'/>
    </div>
  )
}

export default PageNotFound