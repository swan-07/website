import React from 'react'
import Image from 'next/image';

const Author = ({authors}) => {
  return (
    <div className="text-center mt-20 mb-8 p-12 relative rounded-lg bg-black bg-opacity-20">
        <div className="absolute left-0 right-0 -top-14">
          <Image
            alt={authors[0].name}
            unoptimized
            height = "100"
            width = "100"
            className = "rounded-full align-middle"
            src = {authors[0].photo.url}
          />
        </div>
        <h3 className="text-white my-4 text-xl font-bold">{authors[0].name}</h3>
        <p className="text-white text-lg">{authors[0].bio}</p>
    </div>
  )
}

export default Author